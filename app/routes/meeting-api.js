var express = require('express');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.post('/create', meetingController.createMeeting);

module.exports = router;
