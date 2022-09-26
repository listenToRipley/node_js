const express = require('express');
const path = require('path');
const router = express.Router(); // pluggable into 

//same path can be used if the methods are different < see route call for this and the form action to example
router.get('/add-product', (req, res, next) => { // post method now
  // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  //res.sendFile('../views/shop.html');
  res.sendFile(path.join(__dirname, "../","views", "add-product.html"))
});

router.post('/add-product', (req, res, next) => { // get only run for get request
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; 