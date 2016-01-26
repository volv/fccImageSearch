'use strict';

var path = process.cwd();
var headerparse = require(path + '/app/api/header-parser.js');

module.exports = function (app, passport) {
	
	app.route('/:anything')
		.get(headerparse)
		
	app.get('/', function(req, res) {
		res.sendFile(path + '/public/index.html');
	})	

};
