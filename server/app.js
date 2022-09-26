// import modules 
const http = require('http'); // built in module
const routes = require('./routes'); //this is the local path to the new requirement


console.log(routes.someText)
// function reqListener(req, res) {
// }; // this executes on any incoming requests as a callback. Hoover over the createServer for details
// http.createServer(reqListener); // refactor 

// const server = http.createServer((req, res) => {
//   // console.log(req); 
//   //console.log(req.url, req.method, req.headers)
//   // information from router was previously housed in this body, but for clarify of purpose, it was moved to routes.js. 
// });
const server = http.createServer(routes.handler); //tells node to execute the function stored in routes. 
// the . allows for you to target specific functionality when using the object structure within the system. 

server.listen(3000); // start a process 