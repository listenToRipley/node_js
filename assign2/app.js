const http = require('http'); 
const express = require('express'); 
const app = express(); 

// app.use((req, res, next) => {
//   console.log('You found the middleware!')
//   next(); 
// });

// app.use((req, res, next) => {
//   console.log('You found the second middleware')
// });

app.use('/users',(req, res, next) => {
  console.log('You found the user middleware!')
  res.send('<h1>You found the user page!</h1>');
});

app.use('/',(req, res, next) => {
  console.log('You found the main middleware. This is the end of the line')
  res.send('<h1>You found the main page!</h1>'); 
});

const server = http.createServer(app); 

server.listen(3000); 