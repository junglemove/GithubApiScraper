"use strict";
var request = require("request");
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*http://localhost:3000/github/created:>2016-12-09*/
router.get('/:gitcmd', function (req, res, next) {
    var gitcmd = req.params.gitcmd;

    res.setHeader("Content-Type", "application/json");

    var options = {
        method: 'GET',
        url: 'https://api.github.com/',
        qs: {q: `${gitcmd}`},
        headers: {
            'cache-control': 'no-cache',
            'user-agent': 'junglemove'
        }
    };

    request(options, (error, response, body) => {
        if (error) throw new Error(error);
        //console.log(body);
    }).pipe(res);     //https://content-security-policy.com/

});

module.exports = router;
