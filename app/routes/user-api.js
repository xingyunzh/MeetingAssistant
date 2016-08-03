var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var userController = require('../controllers/userController');

// User Login
router.post('/verification', userController.verifyID);

// router.get('/', function (req, res) {
//     res.render('index', {title: 'Index', user: req.decoded.name});
// });

module.exports = router;
