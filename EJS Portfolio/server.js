// load the things we need
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// set the view engine to ejs

var siteRoute = require('./route.js');
app.use('/', siteRoute);

var projectRoute = require('./projectRoute.js');
app.use('/projects', projectRoute);

app.listen(8080);
console.log('8080 is hosting the Portfolio');