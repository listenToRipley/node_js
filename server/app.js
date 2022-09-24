// import modules 
const http = require('http'); // built in module
const fs = require('fs'); //file sync

// function reqListener(req, res) {
// }; // this executes on any incoming requests as a callback. Hoover over the createServer for details
// http.createServer(reqListener); // refactor 

const server = http.createServer((req, res) => {
  // console.log(req); 

  console.log(req.url, req.method, req.headers)

  const url = req.url; 
  const method = req.method;

  //process.exit(); // when you go to localhost:3000 after running it will now exit.
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
    res.write('<html>');//write some data to the response 
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input id="message" type="text" placeholder="enter your message here!"/><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); 
  };

  if (url === "/message" && method === "POST") {

    const body = []; //ending the value within, but not the variable itself

    res.on('data', (chunk) => {
      console.log('CHUNK >>\n',chunk); 
      body.push(chunk);
    }); //how use to listen to events

    res.on('end', () => {
      //creating a buffer and interact with the data
      const parsedBody = Buffer.concat(body).toString();
      console.log('PARSE BODY\n', parsedBody); 

      const message = parsedBody.split('=')[1]; 
      fs.writeFileSync('message.txt', message); 

    }); // after this data is done
    res.statusCode = 302; 
    res.setHeader('Location', '/'); 
    return res.end(); 
    // res.writeHead(302, {});//write meta information, 302 - redirect or use the above 
  };
    res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
    res.write('<html>');//write some data to the response 
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); 
  //shouldn't write anything after it is end. This is how it will be sent back to the client. 

});

server.listen(3000); // start a process 