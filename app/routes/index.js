'use strict';

module.exports = function (app, passport) {
	
	app.route('/:date')
		.get(function(req, res, next) {
	       res.json(req.params.date);
	       console.log(req.params.date);
	       //next();
		})
		
	app.get('/', function(req, res) {
		res.sendFile(process.cwd() + '/public/index.html');
	})	

};
