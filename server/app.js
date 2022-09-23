// import modules 
const http = require('http'); // built in module

// function reqListener(req, res) {
// }; // this executes on any incoming requests as a callback. Hoover over the createServer for details
// http.createServer(reqListener); // refactor 

const server = http.createServer((req, res) => {
  console.log(req); 
  process.exit();
});

server.listen(3000); // start a process 