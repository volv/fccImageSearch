"use strict";
var validurl = require('valid-url');

module.exports = function(req, res) {

    var shortSites = req.app.locals.sites;

    var urlPart = req.params[0] || req.body.original_url;
    var allowBad = req.query.allow;

    console.log("ALLOWED???", allowBad)

    function nextUrl(url) {
        var fullUrl = req.protocol + 's://' + req.get('host') +"/";
        console.log (fullUrl)
        return fullUrl + shortSites.length;
    }

    if (validurl.isWebUri(urlPart) || allowBad === "true") {

        var original_url = urlPart;
        var short_url = nextUrl(original_url);

        var result = {
            original_url, short_url
        };
        
        shortSites.push(result);
        res.status(200).json(result);
    }
    else {
        res.status(400).send('Bad Request <br>Append URL (with http(https)://) to /new/ to get shortened link<br>Use <b>?allow=true</b> to force conversion')
    }

}