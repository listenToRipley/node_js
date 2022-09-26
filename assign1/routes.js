const fs = require('fs');


const requestHandler = (req, res) => {
  const url = req.url; 
  const method = req.method; 

  if(url === '/') {
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>Hello There!</title></head>');
    res.write('<body>Please create your login<form action="/create-user" method="POST"><input type="text" placeholder="new username" name="username"><button type="submit">Create</button></form></body>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<html>');
    res.write('<head><title>List of users</title></head>');
    res.write('<body> <ul><li>Han Solo</li> <li>Princess Lela</li> <li>Chewbacca</li> <li>Luke Skywalker</li> </ul> </body>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/create-user' && method === 'POST') {
    const body = []

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); 
      const username = parsedBody.split('=')[1]; 
      fs.writeFileSync('usernames.txt', username, err => {
        res.statusCode = 302; 
        res.setHeader('Location', '/');
        console.l0g(username); 
        return res.end(); 
      })
    });

  };

}; 

module.exports = requestHandler; 