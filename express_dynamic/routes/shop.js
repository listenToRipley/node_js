const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html')); // this is a way of sharing information, but still will persist across browsers or users. 
//how to render the template.
  res.render('shop', {prods: adminData.products, docTitle: 'Shop'}); //don't have to give the template name since the template type was provided in the app.js
  //render allows for information that should be passed into the view. 
  // the section args between the {} is a js object that allows us to pass information into the given template 
});

module.exports = router;
