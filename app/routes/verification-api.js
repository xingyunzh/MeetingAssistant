/**
 * Created by morrieati on 16/7/29.
 */
var express = require('express');
var router = express.Router();

var idController = require('../controllers/loginController');

router.get('/', function (req, res) {
    res.render('login');
});

// User Login
router.post('/verification', idController.verify);

module.exports = router;