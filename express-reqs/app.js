const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //register a parser 

// if you have everything that starts with /admin, it will start at the route. 
app.use('/admin',adminRoutes); // will automatically consider the application provided in the admin. 
//order continues to matter.
app.use(shopRoutes); 

//catch all for error handling
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>'); 
});

app.listen(3000);
