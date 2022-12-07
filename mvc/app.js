const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views'); // how to see the location of the html and where the template should exist 

const adminRoutes = require('./routes/admin'); // just the routes now. 
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // allows for ALL routes from adminData to be accessible.
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
