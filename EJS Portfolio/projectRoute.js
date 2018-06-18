var express = require('express');
var router = express.Router();

// project page 1 
router.get('/project-1', function(req, res) {
    res.render('pages/projects/project-1');
});

// project page 2 
router.get('/project-2', function(req, res) {
    res.render('pages/projects/project-2');
});

// project page 3 
router.get('/project-3', function(req, res) {
    res.render('pages/projects/project-3');
});

// project page 4 
router.get('/project-4', function(req, res) {
    res.render('pages/projects/project-4');
});

module.exports = router;