const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/cryptid', (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "cryptid.html"));
}); 

router.post('/cryptid', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router