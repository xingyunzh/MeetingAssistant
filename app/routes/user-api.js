var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var userController = require('../controllers/userController');

// User Login
router.post('/login', userController.verifyID);

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

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

router.get('/', function (req, res) {
    res.render('index', {title: 'Index', user: req.decoded.name});
});

module.exports = router;
