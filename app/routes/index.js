var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var log_controller = require('../controllers/logController');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Meeting Assistant'});
});

router.post('/', user_controller.logStatus);
router.post('/login', log_controller.verifyID);

module.exports = router;
