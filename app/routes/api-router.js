var express = require("express");
var token = require('../util/shared/token');
var router = express.Router();

var verificationAPI = require("./verification-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var senmailAPI=require("./sendmail-api");
var settingAPI=require("./setting-api");
var hostviewAPI=require("./hostview-api");

router.use("/", verificationAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);

router.use("/setting",settingAPI);
router.use("/hostview",hostviewAPI);

router.use(token.Parser);

router.use("/api/meeting", meetingAPI);
router.use("/api/user", userAPI);

module.exports = router;
