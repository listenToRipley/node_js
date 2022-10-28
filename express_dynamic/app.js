const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHBs = require('express-handlebars'); 

const app = express();

//the name provided here needs to match the reference name provided in app.set second agr.
//the name given here will also effect the file reference title.  
// app.engine('hbs', expressHBs({
//     layoutDir: "views/layout", 
//     defaultLayout: "main-layout", 
//     extname: "hbs" // setting the name of the extensions as set in the first variable, but must be restarted here or will default to handlebars.
// })); 

// app.set('view engine', 'pug'); // this works with pug as it "self registers" with express and becomes accessible to express. 

// app.set('view engine', 'hbs')
app.set('view engine', 'ejs')
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
