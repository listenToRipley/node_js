const path = require('path');

const express = require('express');

const productsController = require('../controllers/products'); // import the functionality.

const router = express.Router();

//allows use to access via a reference all the information from here. 
router.get('/', productsController.getAddProduct);

module.exports = router;
