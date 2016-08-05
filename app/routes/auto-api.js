var express = require('express');
var router = express.Router();


var automodelController = require("../controllers/automodelController");

router.post('/autofun', automodelController.autofun);

module.exports = router;
