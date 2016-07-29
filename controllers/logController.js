/**
 * Created by morrieati on 7/28/16.
 */
var request = require('request');

exports.verifyID = function (req, res, next) {
    request.post('http://www.xingyunzh.com:3001/users/verify', {
        form: {
            'username': req.body.username,
            'password': req.body.password
        }
    }, function (error, response, body) {
        console.log(body);
    });


    //console.log(req.body.username);
    res.send("ok");
};