var express = require('express');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.get('/', function (req, res) {
    res.render('meeting');
});

router.post('/create', meetingController.createMeeting);

router.post('/')

module.exports = router;
