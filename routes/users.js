var express = require('express');
var router = express.Router();


var user_controller = require('../controllers/userController');

router.post('/', user_controller.logStatus);

module.exports = router;
