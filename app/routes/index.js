'use strict';

module.exports = function (app, passport) {
	
	app.route('/:date')
		.get(function(req, res, next) {
	       res.json(req.params.date);
	       console.log(req.params.date);
		})

};
