var express = require('express');
var router = express.Router();

var logController = require('../controllers/logController');

router.post('/', logController.verifyID);

module.exports = router;
