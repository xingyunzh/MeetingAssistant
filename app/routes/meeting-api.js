var express = require('express');
var util = require('../util/shared/util');
var router = express.Router();

var meetingController = require('../controllers/meetingController');

router.post('/', function (req, res) {
    res.json(util.wrapBody({
        success: true,
        user: req.decoded._doc.fullName
    }));
});

router.post('/submission', meetingController.createMeetingById);

module.exports = router;
