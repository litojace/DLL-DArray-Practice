const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const teacherPage = fs.readFileSync(path.join(__dirname, 'teacher.html'), 'utf8');
const buckets = new Map();
function send(res, status, value) {
 res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
 res.end(JSON.stringify(value));
}
function authorized(req) {
 const password = process.env.ANALYTICS_ADMIN_PASSWORD;
 if (!password) return false;
 const raw = req.headers.authorization || '';
 if (!raw.startsWith('Basic ') || raw.length > 4096) return false;
 const expected = (process.env.ANALYTICS_ADMIN_USER || 'teacher') + ':' + password;
 const actual = Buffer.from(raw.slice(6), 'base64').toString('utf8');
 const hash = text => crypto.createHash('sha256').update(text).digest();
 return crypto.timingSafeEqual(hash(actual), hash(expected));
}
function limited(req, kind) {
 const now = Date.now();
 // Short-lived in-memory abuse protection; addresses are not sent to the database.
 const key = kind + ':' + (req.socket.remoteAddress || 'unknown');
 const entry = buckets.get(key);
 if (!entry || entry.until < now) {
  if (buckets.size > 2000) buckets.clear();
  buckets.set(key, { until: now + 60000, count: 1 }); return false;
 }
 return ++entry.count > (kind === 'login' ? 20 : 180);
}
async function rpc(name, payload) {
 const url = process.env.SUPABASE_URL;
 const key = process.env.SUPABASE_SECRET_KEY;
 if (!url || !key) throw new Error('not_configured');
 const headers = { 'Content-Type': 'application/json', apikey: key };
 // Legacy service-role JWTs require Authorization; new sb_secret keys use apikey.
 if (!key.startsWith('sb_secret_')) headers.Authorization = 'Bearer ' + key;
 const result = await fetch(url.replace(/\/$/, '') + '/rest/v1/rpc/' + name, {
  method: 'POST', headers, body: JSON.stringify(payload), signal: AbortSignal.timeout(8000)
 });
 if (!result.ok) throw new Error('database_unavailable');
 return name === 'practice_statistics' ? result.json() : null;
}
async function handleAnalytics(req, res, pathname) {
 if (!['/teacher', '/api/analytics', '/api/track'].includes(pathname)) return false;
 if (pathname !== '/api/track') {
  if (!process.env.ANALYTICS_ADMIN_PASSWORD) { send(res, 503, { error: 'Teacher dashboard not configured. Set ANALYTICS_ADMIN_PASSWORD on the server.' }); return true; }
  if (!authorized(req)) {
   if (limited(req, 'login')) { send(res, 429, { error: 'Too many sign-in attempts. Try again in a minute.' }); return true; }
   res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Teacher dashboard", charset="UTF-8"', 'Cache-Control': 'no-store' });
   res.end('Teacher sign-in required.'); return true;
  }
  if (req.method !== 'GET') { send(res, 405, { error: 'Method not allowed' }); return true; }
  if (pathname === '/teacher') {
   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Frame-Options': 'DENY', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; frame-ancestors 'none'" });
   res.end(teacherPage); return true;
  }
  try { send(res, 200, await rpc('practice_statistics', {})); }
  catch { send(res, 503, { error: 'Tracking database unavailable or not configured. Follow ANALYTICS-SETUP.md.' }); }
  return true;
 }
 if (req.method !== 'POST') { send(res, 405, { error: 'Method not allowed' }); return true; }
 if (req.headers['sec-fetch-site'] === 'cross-site') { send(res, 403, { error: 'Cross-site request rejected' }); return true; }
 if (req.headers.origin) {
  try { if (new URL(req.headers.origin).host !== req.headers.host) { send(res, 403, { error: 'Cross-site request rejected' }); return true; } }
  catch { send(res, 400, { error: 'Invalid origin' }); return true; }
 }
 if (limited(req, 'track')) { send(res, 429, { error: 'Try again later' }); return true; }
 try {
  let body = '', length = 0;
  for await (const chunk of req) { length += chunk.length; if (length > 1024) { send(res, 413, { error: 'Request too large' }); return true; } body += chunk.toString(); }
  const data = JSON.parse(body);
  if (!data || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.browserId || '') || typeof data.darray !== 'boolean' || typeof data.dll !== 'boolean') {
   send(res, 400, { error: 'Invalid activity' }); return true;
  }
  await rpc('record_practice_activity', { p_browser_id: data.browserId, p_darray: data.darray, p_dll: data.dll });
  send(res, 200, { recorded: true });
 } catch (error) { send(res, error instanceof SyntaxError ? 400 : 503, { error: error instanceof SyntaxError ? 'Invalid activity' : 'Tracking unavailable' }); }
 return true;
}
module.exports = { handleAnalytics, authorized };
