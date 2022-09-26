const express = require(express);
const router = express.Router(); // pluggable into 

router.get('/add-product', (req, res, next) => { // post method now
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => { // get only run for get request
  console.log(req.body);
  res.redirect('/');
});

module.exports = router; 