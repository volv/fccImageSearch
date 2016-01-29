'use strict';
var express = require('express');
var shortener = require('./app/routes/shortener.js');
var bodyparser = require('body-parser')
var morgan = require('morgan')

var app = express();

app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(morgan("combined"));

app.locals.sites = [];

shortener(app);

app.get('/:num', function(req, res, next) {

    var passedNum = req.params.num;

    if (Number(passedNum) < app.locals.sites.length)
        res.redirect(app.locals.sites[passedNum].original_url);
    else {
        next();
    }

});

app.use(notFound);

function notFound(req, res, next) {
    res.status(404).send("404 - VolvErrorMog<br>File Not Found");
    next();
}
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});