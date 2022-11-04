const path = require('path');

const express = require('express'); 

const main = require('./main');

const router = express.Router(); 

console.log(main.users)

router.get('/users', (req, res, next) => {
    console.log('users.js', main.users)

    res.render('users', {
        users: main.users,
        pageTitle: 'All Users',
        path: '/users',
        usersActive: true,
        usersCSS: true,
    })
});

module.exports = router;