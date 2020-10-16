const http = require('http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.listen(3000)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});