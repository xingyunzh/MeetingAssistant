var request = require('request');
var User = require("../models/user");

exports.verifyID = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    request.post('http://www.xingyunzh.com:3001/users/verify', {
        form: {
            'username': username,
            'password': password
        }
    }, function (error, response, body) {
        console.log(body);
    });

    var user = new User({
        name: username,
        password: password,
        date: new Date()
    });
    user.save(function (err, user) {
        if (err) return console.error(err);
    });
    console.log("Log Saved");

    res.send("ok");
};