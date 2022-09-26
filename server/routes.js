const fs = require('fs'); //file sync

const requestHandler = (req, res) => { //req, res is cached by node. 

  const url = req.url; 
  const method = req.method;

  //process.exit(); // when you go to localhost:3000 after running it will now exit.
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" placeholder="enter message here" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/message' && method === 'POST') {
    const body = []; //ending the value within, but not the variable itself

    req.on('data', (chunk) => {
      console.log('CHUNK >>\n',chunk); 
      body.push(chunk); //how use to listen to events
      
    });

    req.on('end', () => { //"stop" point
      //creating a buffer and interact with the data
      const parsedBody = Buffer.concat(body).toString();
      console.log('PARSE BODY\n', parsedBody); 

      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, err => {

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        // res.writeHead(302, {});//write meta information, 302 - redirect or use the above 
      });
    });// after this data is done
  }

  res.setHeader('Content-Type', 'text/html'); //attach header with meta information. <formatting the write command
  res.write('<html>');//write some data to the response 
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end(); 
  //shouldn't write anything after it is end. This is how it will be sent back to the client. 
};

// module.exports = requestHandler; // one way to export and have the function be accessible. 
module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text into this document, maybe description of the handler?'
}; // same thing as above, but allows multiples being exported. Way to drop,  but keep exports seperate. 