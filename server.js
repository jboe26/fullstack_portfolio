// Dependencies
var http = require("http");
var fs = require("fs");
// var express = require('express');

// Set our port to 8080
const hostname = '127.0.0.1';
const port = 3000;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "assets/index.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const http = require('http');
// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World');
// })

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// app.listen(3000)

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

