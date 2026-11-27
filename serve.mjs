import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';

const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/recording.html', ['recording.html', 'text/html; charset=utf-8']],
  ['/upload.js', ['upload.js', 'text/javascript; charset=utf-8']],
  ['/upload-error.js', ['upload-error.js', 'text/javascript; charset=utf-8']],
]);

createServer((request, response) => {
  const file = files.get(request.url?.split('?', 1)[0]);
  if (!file) {
    response.writeHead(404).end();
    return;
  }
  const [name, contentType] = file;
  response.writeHead(200, { 'Content-Type': contentType });
  response.end(readFileSync(new URL(name, import.meta.url)));
}).listen(4316, '127.0.0.1');
