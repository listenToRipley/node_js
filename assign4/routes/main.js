const path = require('path'); 

const express = require('express');

const router = express.Router(); 

const users = []

router.get('/', (req, res, next) => {
    res.render('main', {
        pageTitle: 'Add User',
        path: '/main',
        activeMain: true,
        mainCSS: true,
        formCSS: true,
    });
});

router.post('/', (req, res, next) => {
    users.push({ username: req.body.username })
    res.redirect('/users')
});

exports.routes = router; 

exports.users = users; 