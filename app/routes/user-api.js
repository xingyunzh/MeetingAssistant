var express = require('express');
var token = require('../util/shared/token');
var router = express.Router();

var userController = require('../controllers/userController');

// User Login
router.post('/verification', userController.verifyID);

router.get('/', function (req, res) {
    res.render('user');
});

router.use(token.Parser);

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

module.exports = router;
