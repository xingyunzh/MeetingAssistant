var request = require('request');
var jwt = require('jsonwebtoken');
var User = require("../models/user");

exports.verifyID = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    request.post('http://www.xingyunzh.com:3001/users/verify', {
        form: {
            'username': username,
            'password': password
        }
    }, function (error, response, body) {
        if (error) return console.error(error);

        if (body) {
            var userBody = JSON.parse(body).body;
            if (userBody) {
                User
                    .findOne({thirdPartyId: userBody._id})
                    .exec(function (err, user) {
                        if (err) return console.error(err);

                        if (user) {
                            User.update(
                                {thirdPartyId: userBody._id},
                                {lastLoginDate: new Date()},
                                {multi: true},
                                function (err, rawResponse) {
                                    if (err) return console.error(err);
                                }
                            );
                        } else {
                            user = new User({
                                thirdPartyId: userBody._id,
                                fullName: userBody.name,
                                createdDate: new Date(),
                                lastLoginDate: new Date()
                            });

                            user.save(function (err, user) {
                                if (err) return console.error(err);
                            });
                        }
                        var token = jwt.sign(user, 'xingyunzh-secret', {
                            expiresIn: 300
                        });

                        res.json({
                            success: true,
                            token: token,
                        });
                    });
            } else {
                console.log("Verification failed!");
                res.json({
                    success: false
                });
            }
        } else {
            res.json({
                success: false
            })
        }
    });
};