const express = require('express');
const path = require('path'); 
const bodyParse = require('body-parser'); 

const rootDir = require('./util/path');

const cryptidRoutes = require('./routes/cryptid');
const humanRoutes = require('./routes/human'); 

const app = express(); 

app.use(bodyParse.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, "public"))); 


app.use('/secret', cryptidRoutes); 
app.use(humanRoutes); 

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "lost.html"))
});

app.listen(3000); 