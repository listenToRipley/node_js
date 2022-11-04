const path = require('path'); 

const express = require('express');

const router = express.Router(); 

const users = []

router.get('/add-user', (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add User',
        path: '/add-user',
        activeAddUser: true,
        mainCSS: true,
        formCSS: true,
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({ username: req.body.username })
    res.redirect('/')
});

exports.routes = router; 

exports.users = users; 