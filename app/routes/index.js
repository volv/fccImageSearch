'use strict';

var path = process.cwd();
var timestamp = require(path + '/app/api/timestamp.js');

module.exports = function (app, passport) {
	
	app.route('/:date')
		.get(function(req, res) {
			timestamp(req, res)
		})
		
	app.get('/', function(req, res) {
		res.sendFile(path + '/public/index.html');
	})	

};
