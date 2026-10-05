const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const read = file => fs.readFileSync(path.join(__dirname, file), 'utf8');
const topics = [
  { header: read('cpp/DArray.h'), base: read('cpp/DArray.cpp'), graders: JSON.parse(read('graders/darray.json')) },
  { header: read('cpp/DoublyList.h'), base: read('cpp/DoublyList.cpp'), graders: JSON.parse(read('graders/dll.json')) }
];
const assets = new Map([
  ['/', ['text/html', read('public/index.html')]],
  ['/index.html', ['text/html', read('public/index.html')]],
  ['/script.js', ['text/javascript', read('public/script.js')]],
  ['/style.css', ['text/css', read('public/style.css')]]
]);

function json(res, status, value) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
  res.end(JSON.stringify(value));
}

const server = http.createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname === '/health' && req.method === 'GET') return json(res, 200, { status: 'ok' });
  if (pathname === '/run' && req.method === 'POST') {
    let submission;
    try {
      const chunks = [];
      let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 24000) return json(res, 413, { success: false, error: 'Submission is too large.' });
        chunks.push(chunk);
      }
      submission = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      return json(res, 400, { success: false, error: 'Invalid submission JSON.' });
    }
    const { problem, code } = submission || {};
    const topic = topics.find(t => typeof problem === 'string' && Object.hasOwn(t.graders, problem));
    if (!topic || typeof code !== 'string' || code.length > 20000) {
      return json(res, 400, { success: false, error: 'Invalid problem or submission.' });
    }
    const source = topic.header + '\n' + topic.base + '\n#line 1 "submission.cpp"\n' + code + '\n#line 1 "grader.cpp"\n' + topic.graders[problem];
    try {
      const response = await fetch('https://wandbox.org/api/compile.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compiler: 'gcc-13.2.0', code: source, options: 'warning,gnu++17', save: false }),
        signal: AbortSignal.timeout(25000)
      });
      if (!response.ok) return json(res, 200, { success: false, error: 'The online compiler is busy. Please try again shortly.' });
      const result = await response.json();
      if (String(result.status) !== '0') {
        return json(res, 200, { success: false, error: result.compiler_error || result.program_error || result.compiler_message || 'Compilation or execution failed.' });
      }
      return json(res, 200, { success: true, output: result.program_output || '' });
    } catch {
      return json(res, 200, { success: false, error: 'Could not reach the online compiler. Please try again.' });
    }
  }
  const asset = assets.get(pathname);
  if (asset && (req.method === 'GET' || req.method === 'HEAD')) {
    res.writeHead(200, { 'Content-Type': asset[0] + '; charset=utf-8', 'X-Content-Type-Options': 'nosniff' });
    return res.end(req.method === 'HEAD' ? undefined : asset[1]);
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

if (require.main === module) {
  server.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log(`C++ practice listening on port ${server.address().port}`));
}
module.exports = { server };
