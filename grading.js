const unavailable = { success: false, errorType: 'service_unavailable', error: 'Grading service temporarily unavailable. Your code and completion progress have been kept. Please try again shortly.' };
async function compile(source, { fetchImpl = fetch, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
 for (let attempt = 0; attempt < 3; attempt++) {
  try {
   const response = await fetchImpl('https://wandbox.org/api/compile.json', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ compiler: 'gcc-13.2.0', code: source, options: 'warning,gnu++17', save: false }),
    signal: AbortSignal.timeout(15000)
   });
   if (!response.ok) {
    if (![408,429].includes(response.status) && response.status < 500) return { ...unavailable };
   } else {
    const result = await response.json();
    const error = result.compiler_error || result.program_error || result.compiler_message || 'Compilation or execution failed.';
    // Container startup failures are infrastructure errors, not student errors.
    const diagnostic = [result.compiler_error, result.program_error, result.compiler_message].filter(Boolean).join('\n');
    const infrastructure = /OCI runtime error|crun:.*(?:clone|resource temporarily unavailable)|failed to create.*container/i.test(diagnostic);
    if (!infrastructure) {
     if (result.status == null) return { ...unavailable };
     return String(result.status) === '0' ? { success: true, output: result.program_output || '' } : { success: false, errorType: 'submission_error', error };
    }
   }
  } catch { /* Retry network failures, timeouts, and invalid upstream responses. */ }
  if (attempt < 2) await sleep((attempt + 1) * 1000);
 }
 return { ...unavailable };
}
module.exports = { compile };
