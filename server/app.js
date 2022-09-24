// import modules 
const http = require('http'); // built in module

// function reqListener(req, res) {
// }; // this executes on any incoming requests as a callback. Hoover over the createServer for details
// http.createServer(reqListener); // refactor 

const server = http.createServer((req, res) => {
  // console.log(req); 
  console.log(req.url, req.method, req.headers)
  //process.exit(); // when you go to localhost:3000 after running it will now exit.
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
    res.write('<html>');//write some data to the response 
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" placeholder="enter your message here!"/><button type="submit">Send</button></form></body>');
    res.write('</html>');
    res.end(); 
  }
    res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
    res.write('<html>');//write some data to the response 
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); 
  //shouldn't write anything after it is end. This is how it will be sent back to the client. 

});

server.listen(3000); // start a process 