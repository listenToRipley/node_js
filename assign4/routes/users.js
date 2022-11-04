const path = require('path');

const express = require('express'); 

const main = require('./main');

const router = express.Router(); 

router.get('/users', (req, res, next) => {
    console.log('users.js', main.users)

    res.render('users', {
        users: main.users,
        pageTitle: 'All Users',
        hasUsers: main.users.length > 0,
        usersActive: true,
        usersCSS: true,
    })
});

module.export = router; 