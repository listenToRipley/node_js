const express = require('express');
const path = require('path'); 
const router = express.Router(); 

const rootDir = require('../util/path'); 

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  //res.sendFile('../views/shop.html');// instead of sending text, import content, the path must be absolute. 
  //oooorrrr 
  // res.sendFile(path.join(__dirname, "../","views", "shop.html"));//you can build your path based on your current location.
  //each section should be broken into their own section because of join.  
  //or you can use the created util 
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router; 