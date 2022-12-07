const path = require('path');

const express = require('express');

const productsController = require('../controllers/products'); // import the functionality.

const router = express.Router(); 

//allows use to access via a reference all the information from here. 
router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProducts);

//since we have adjusted how we are handling data, we would just export the whole router now.
// exports.routes = router;
// exports.products = products;

module.exports = router;
