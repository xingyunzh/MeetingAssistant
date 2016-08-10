var express = require('express');
var util = require('../util/shared/util');
var router = express.Router();

var userController = require('../controllers/userController');

router.post('/', function (req, res) {
    res.json(util.wrapBody({
        success: true,
        user: req.decoded._doc.fullName
    }));
});

module.exports = router;
