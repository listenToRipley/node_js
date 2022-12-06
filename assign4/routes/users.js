const path = require('path');

const express = require('express'); 

const main = require('./main');

const router = express.Router(); 

router.get('/users', (req, res, next) => {

    res.render('users', {
        users: main.users,
        pageTitle: 'All Users',
        path: '/users',
        usersActive: true,
        usersCSS: true,
    })
});

router.post('/add-users', (req, res, next) => {
    users.push({ username: req.body.username })
    res.redirect('/users')
});


module.exports = router;