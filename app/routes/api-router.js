var express = require("express");
var router = express.Router();

var loginAPI = require("./login-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");

router.use("/", loginAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);

module.exports = router;
