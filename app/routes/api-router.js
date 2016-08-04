var express = require("express");
var router = express.Router();

var loginAPI = require("./login-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var senmailAPI=require("./sendmail-api");
var settingAPI=require("./setting-api");
var hostviewAPI=require("./hostview-api");

router.use("/", loginAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);
router.use("/sendmail",senmailAPI);
router.use("/setting",settingAPI);
router.use("/hostview",hostviewAPI);

module.exports = router;
