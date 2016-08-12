var express = require('express');
var router = express.Router();


var automodelController = require("../controllers/automodelController");

router.post('/auto', automodelController.autofun);

module.exports = router;
