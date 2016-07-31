var request = require('request');
var jwt = require('jsonwebtoken');
var User = require("../models/user");

exports.verifyID = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    request.post('http://www.xingyunzh.com:3001/users/verify', {
        form: {
            'username': username,
            'password': password
        }
    }, function (error, response, body) {
        var userBody = JSON.parse(body).body;
        if (userBody) {
            User
                .findOne({username: userBody.username})
                .exec(function (err, doc) {
                    if (doc) {
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
            var token = jwt.sign(userBody, 'xingyunzh-secret', {
                expiresIn: 300
            });

            res.json({
                success: true,
                token: token,
                name: userBody.name
            });

        } else {
            console.log("Verification failed!");
            res.json({
                success: false
            });
        }
    });
};