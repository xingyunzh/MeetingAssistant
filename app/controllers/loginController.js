var request = require('request');
var util = require('../util/shared/util');
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var User = require('../models/user');

exports.verify = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    request.post('http://www.xingyunzh.com:3001/users/verify', {
            form: {
                "username": username,
                "password": password
            }
        }, function (error, response, body) {
            if (error) {
                errorHandler(res, error, 'No such user !');
            } else {
                var userBody = JSON.parse(body).body;
                if (userBody) {
                    // Find userBody in local database, if there is, update, else return
                    User
                        .findOne(
                            {thirdPartyId: userBody._id},
                            function (err, user) {
                                if (err) {
                                    errorHandler(res, err, 'Cannot connect Database !');
                                } else {
                                    if (user) {
                                        User
                                            .update(
                                                {thirdPartyId: userBody._id},
                                                {lastLoginDate: new Date()},
                                                {multi: true})
                                            .exec(function (err, rawResponse) {
                                                if (err) errorHandler(res, err, 'Cannot update to Database !');
                                            });

                                        res.json(util.wrapBody({
                                            success: true,
                                            token: user.generateToken()
                                        }, 'S'));
                                    } else {
                                        // add user to database and return token
                                        var newUser = new User({
                                            thirdPartyId: userBody._id,
                                            fullName: userBody.name,
                                            email: userBody.email,
                                            createdDate: new Date(),
                                            lastLoginDate: new Date()
                                        });

                                        newUser.save(function (err, rawResponse) {
                                            if (err) errorHandler(res, err, 'Cannot save to Database !');
                                        });

                                        res.json(util.wrapBody({
                                            success: true,
                                            token: newUser.generateToken()
                                        }, 'S'));
                                    }
                                }
                            })
                } else {
                    res.json(util.wrapBody({
                        success: false,
                        message: 'Wrong Password !'
                    }, 'E'));
                }
            }
        }
    );
}