'use strict';
var express = require('express');
var shortener = require('./app/routes/shortener.js');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')

var port = process.env.PORT || 8080;

var app = express();

app.locals.sites = []; // *Global* to app

// Configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use Middleware

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan("dev"));

// Define Routes

shortener(app);
app.get('/:num', resolveShortenedNames);
app.use(notFound);

// Start app
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});

// Local 'middleware'
function resolveShortenedNames(req, res, next) {
    var passedNum = req.params.num;
    if (Number(passedNum) < app.locals.sites.length)
        res.redirect(app.locals.sites[passedNum].original_url);
    else 
        next();
}

function notFound(req, res, next) {
    res.status(404).send("404 - VolvErrorMog<br>File Not Found");
    next();
}