"use strict";

module.exports = function(req, res) {

    var ip = req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"].split(",")[0];
    var os = req.headers["user-agent"].match(/\((.+?)\)/)[1];

    var result = { "ipaddress" : ip, "language" : language, "software" : os };

    console.log(result);
    res.json(result);

}