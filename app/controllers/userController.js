var request = require('request');
var User = require("../models/user");

exports.verifyID = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    request.post('http://www.xingyunzh.com:3001/users/verify', {
        form: {
            'username': username,
            'password': password
        }
    }, function (error, response, body) {
        if (body != undefined) {
            var userBody = JSON.parse(body).body;
            User
                .find({username: userBody.username})
                .exec(function (err, docs) {
                    if (docs.length != 0) {
                        User.update(
                            {username: userBody.username},
                            {lastLoginDate: new Date()},
                            {multi: true},
                            function (err, rawResponse) {
                                console.log(rawResponse);
                            }
                        );
                        console.log('User Logged In!');
                    } else {
                        var user = new User({
                            username: userBody.username,
                            name: userBody.name,
                            sex: userBody.sex,
                            createdDate: new Date(),
                            lastLoginDate: new Date()
                        });
                        user.save(function (err, user) {
                            if (err) return console.error(err);
                        });
                        console.log("New User Created!");
                    }
                });
        } else {
            console.log("Verification failed!");
        }
    });

    res.send("ok");
};