var express = require('express');
var token = require('../util/shared/token');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.get('/', function (req, res) {
    res.render('meeting');
});

router.use(token.Parser);

router.post('/', function (req, res) {
    res.json({
        success: true,
        user: req.decoded._doc.fullName
    })
});

router.post('/create', meetingController.createMeeting);

module.exports = router;