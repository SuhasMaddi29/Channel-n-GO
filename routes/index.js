const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('./src/index.html', ensureAuthenticated, (req, res) =>
    res.render('./src/index.html', {
        user: req.user
    })
);

module.exports = router;