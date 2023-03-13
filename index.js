import http from 'node:http';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 4000;

const server = http.createServer((req, res) => {
  res.end('Hello world!');
});

server.on('listening', () => {
  process.stdout.write(`Server running on port ${PORT}...\n`);
});

server.listen(PORT);
