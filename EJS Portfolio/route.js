var express = require('express');
var router = express.Router();

// index page 
router.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// portfolio page 
router.get('/portfolio', function(req, res) {
    res.render('pages/portfolio');
});

module.exports = router;