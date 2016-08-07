var express = require('express');
var router = express.Router();

var settingController = require("../controllers/settingController");

router.get('/', function (req, res) {
    res.render('setting');
});

router.post('/set', settingController.createsetting);

module.exports = router;