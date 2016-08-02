var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.get('/', function (req, res) {
    res.render('meeting');
});

router.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, 'xingyunzh-secret', function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
        console.log("Token OK");
    } else {
        // if there is no token
        // return an error
        console.log("No token " + token);
        res.render('login');
    }
});

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

router.post('/create', meetingController.createMeeting);

module.exports = router;
