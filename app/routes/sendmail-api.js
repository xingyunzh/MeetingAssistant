/**
 * Created by asus on 2016/8/9 0009.
 */
var express = require('express');
var router = express.Router();

var sendmailController = require("../controllers/sendmailController");

router.post('/send', sendmailController.sendmail);

module.exports = router;