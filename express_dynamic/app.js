const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug'); // this works with pug as it "self registers" with express and becomes accessible to express. 
app.set('views', 'views'); // how to see the location of the html and where the template should exist 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes); // allows for ALL routes from adminData to be accessible.
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});

app.listen(3000);
