var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

module.exports = router;
