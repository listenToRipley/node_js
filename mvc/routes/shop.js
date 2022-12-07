const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop'); // import the functionality.

const router = express.Router();

//allows use to access via a reference all the information from here. 
router.get('/', shopController.getShop);

module.exports = router;
