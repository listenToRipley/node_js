const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');

const rootDir = require('./util/path'); 

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
  res.status(404).sendFile(path.join(rootDir, "views", "notFound.html")); 
});

app.listen(3000);
