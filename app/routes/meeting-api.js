var express = require('express');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.get('/', function (req, res) {
    res.render('meeting');
});

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

router.post('/create', meetingController.createMeetingById);

module.exports = router;
