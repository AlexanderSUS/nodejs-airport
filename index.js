import http from 'node:http';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/v1') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');
  } else {
    res.writeHead(404,{ 'Content-Type': 'application/json'} )
    res.write(JSON.stringify({ message: `Could not ${req.method} ${req.url}`}));
    res.end();
  }
});

server.on('listening', () => {
  process.stdout.write(`Server running on port ${PORT}...\n`);
});

server.listen(PORT);
