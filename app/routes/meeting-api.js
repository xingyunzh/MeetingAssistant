var express = require('express');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

router.post('/submission', meetingController.createMeetingById);

module.exports = router;
