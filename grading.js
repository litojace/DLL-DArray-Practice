const unavailable = { success: false, errorType: 'service_unavailable', error: 'Grading service temporarily unavailable. Your code and completion progress have been kept. Please try again shortly.' };
const lines = items => (Array.isArray(items) ? items : []).map(item => item.text || '').join('\n').replace(/\x1b\[[0-9;]*m/g, '');
async function compile(source, { fetchImpl = fetch, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
 for (let attempt = 0; attempt < 3; attempt++) {
  try {
   const response = await fetchImpl('https://godbolt.org/api/compiler/g132/compile', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ source, lang: 'c++', allowStoreCodeDebug: false, options: {
     userArguments: '-std=c++17 -fdiagnostics-color=never',
     compilerOptions: { executorRequest: true }, filters: { execute: true },
     executeParameters: { args: [], stdin: '' }
    } }), signal: AbortSignal.timeout(25000)
   });
   if (!response.ok) {
    if (![408,429].includes(response.status) && response.status < 500) return { ...unavailable };
   } else {
    const result = await response.json();
    const build = result.buildResult;
    const diagnostic = lines(build?.stderr) + '\n' + lines(result.stderr);
    const infrastructure = /OCI runtime error|crun:|failed to create.*container|resource temporarily unavailable/i.test(diagnostic);
    if (!infrastructure && build && typeof build.code === 'number') {
     if (build.code !== 0) return { success: false, errorType: 'submission_error', error: lines(build.stderr) || lines(build.stdout) || 'Compilation failed.' };
     if (result.didExecute === true && typeof result.code === 'number') {
      if (result.code === 0 && !result.timedOut && !result.truncated) return { success: true, output: lines(result.stdout) + '\n' };
      return { success: false, errorType: 'submission_error', error: result.timedOut ? 'Your program exceeded the execution time limit. Check for an infinite loop.' : lines(result.stderr) || (result.truncated ? 'Your program produced too much output.' : 'Your program stopped with exit code ' + result.code + '. Check for invalid pointer or array access.') };
     }
    }
   }
  } catch { /* Retry temporary connection and service failures. */ }
  if (attempt < 2) await sleep((attempt + 1) * 1000);
 }
 return { ...unavailable };
}
module.exports = { compile };
