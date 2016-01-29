'use strict';

var path = process.cwd();
var shortener = require(path + '/app/api/shortener.js');

module.exports = function (app) {
	
	app.route('/new/*/')
		.get(shortener)
		.post(shortener)
		
	app.get('/', function(req, res) {
		res.sendFile(path + '/public/index.html');
	})	

};
