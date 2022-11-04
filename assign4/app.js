const path = require('path'); 

const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

const main = require('./routes/main');
const users = require('./routes/users');
console.log(users)

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', main.routes);
app.use(users); 

app.use((req, res, next) => {
    res.status(400).render('404', {pageTitle:"Page Not Found"})
});

app.listen(3000); 