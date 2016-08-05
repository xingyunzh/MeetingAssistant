var express = require('express');
var router = express.Router();


var automodelController = require("../controllers/automodelController");

router.post('/autofun', sendmailController.autofun);

module.exports = router;
