"use strict";
var moment = require('moment');

module.exports = function(req, res) {

    var result = {};
    var passedDate = req.params.date;
    var fixedDate = parseInt(passedDate) ? new Date(parseInt(passedDate)) : new Date(passedDate);

    if (moment(fixedDate).isValid()) {
        var result = {
            "unix": moment(fixedDate).format("X"),
            "natural": moment(fixedDate).format("MMMM DD, YYYY")
        };
    }
    else {
        var result = {
            "unix": null,
            "natural": null
        };
    }

    res.json(result);

}