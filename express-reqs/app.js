const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //register a parser 

app.use(adminRoutes); // will automatically consider the application provided in the admin. 
//order continues to matter.

app.use(shopRoutes); 

app.listen(3000);
