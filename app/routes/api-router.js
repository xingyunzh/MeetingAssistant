var express = require("express");
var token = require('../util/shared/token');
var router = express.Router();

var verificationAPI = require("./verification-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var autoAPI = require('./auto-api');


router.use("/", verificationAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);
router.use("/auto", autoAPI);

router.use(token.Parser);

router.use("/api/meeting", meetingAPI);
router.use("/api/user", userAPI);

module.exports = router;
