const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => { // first agr is adding a path
    console.log('In the middleware!');
    res.send('<h1>Hello! Add a product here</h1>');
    next(); // Allows the request to continue to the next middleware in line
});

app.use('/', (req, res, next) => { //why is there a path of "/" as a second? 1. it's the default 2. the requests go top to bottom, so it won't go past even with next. 
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>'); //allows you to send a response
});

const server = http.createServer(app);

server.listen(3000);
