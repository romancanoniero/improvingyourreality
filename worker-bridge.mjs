// Invoked over the existing SSH connection. The worker secret stays inside the VPS.
const action = process.argv[2];
if (!['claim', 'evidence', 'fail', 'enqueue', 'catalog'].includes(action))
  throw Error('Invalid action');
let input = '';
for await (const chunk of process.stdin) {
  input += chunk;
  if (input.length > 16000000) throw Error('Payload too large');
}
const r = await fetch('http://127.0.0.1:3180/api/worker/' + action, {
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + process.env.PRESENTATION_WORKER_KEY,
    'Content-Type': 'application/json',
  },
  body: input || '{}',
  signal: AbortSignal.timeout(180000),
});
if (!r.ok) throw Error('Worker request failed: ' + r.status);
process.stdout.write(await r.text());
