/**
 * Created by morrieati on 16/7/29.
 */
var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

// User Login
router.post('/', loginController.verify);

module.exports = router;