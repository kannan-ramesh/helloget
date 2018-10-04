console.log("enter into project");
var express = require('express');
var app = express();

console.log ('create server');
var server=app.listen(8000,function(){
	console.log('Listening on port %d',server.address().port);
});

console.log ('require of the routes');
var webRoutes = require("C:/Users/N.R.Kannan/Desktop/New folder/routes/routes.js");
var webRoutes = function(app){
var webRoutes = new WebRoutes(app);
webRoutes.init()};






