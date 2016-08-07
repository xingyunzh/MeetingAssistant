var express = require('express');
var router = express.Router();

var hostviewController = require("../controllers/hostviewController");

router.get('/', function (req, res) {
    res.render('hostview');
});

router.post('/set', hostviewController.createhostview);

module.exports = router;