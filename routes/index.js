var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meeting Assistant' });
});

router.post('/', user_controller.logStatus);

module.exports = router;
