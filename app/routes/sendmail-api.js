var express = require('express');
var router = express.Router();

var sendmailController = require("../controllers/sendmailController");

router.post('/send', sendmailController.sendmail);

module.exports = router;
