var express = require('express');
var router = express.Router();
var DB = require('../DummyDB');

router.get('/user/:id', function(req, res, next) {
	if(!req.session.user) return res.redirect('/login');
	var user = req.session.user;
	if(req.session.user.id == req.params.id ) return res.render('profile', { title: 'Simple ExpressJS Login', user : user? user: null });
 	var user = DB.getUser(req.params.id)
 	if(!user)
 		return next();
 	res.render('user', user);
});



module.exports = router;
