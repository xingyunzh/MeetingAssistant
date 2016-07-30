var express = require('express');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.get('/', function (req, res, next) {
    res.render('setting', {title: 'Setting'});
});

router.post('/create', meetingController.createMeeting);

module.exports = router;
