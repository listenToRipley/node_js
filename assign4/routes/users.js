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

module.exports = router;