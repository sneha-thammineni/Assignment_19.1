var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
	var user = req.session.user; 
	res.render('index', { title: 'Simple ExpressJS Login', user : user? user: null });
});

module.exports = router;
