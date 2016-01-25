'use strict';

var path = process.cwd();
var timestamp = require(path + '/app/api/header-parser.js');

module.exports = function (app, passport) {
	
	app.route('/:anything')
		.get(function(req, res) {
			timestamp(req, res)
		})
		
	app.get('/', function(req, res) {
		res.sendFile(path + '/public/index.html');
	})	

};
