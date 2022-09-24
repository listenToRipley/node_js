// import modules 
const http = require('http'); // built in module

// function reqListener(req, res) {
// }; // this executes on any incoming requests as a callback. Hoover over the createServer for details
// http.createServer(reqListener); // refactor 

const server = http.createServer((req, res) => {
  // console.log(req); 
  console.log(req.url, req.method, req.headers)
  //process.exit(); // when you go to localhost:3000 after running it will now exit.
  res.setHeader('Content-Type', 'text/html'); //attach header with meta information.
});

server.listen(3000); // start a process 