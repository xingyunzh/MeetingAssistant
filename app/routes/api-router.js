var express = require("express");
var router = express.Router();

var indexAPI = require("./index-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var loginAPI = require("./login-api");

router.use("/", indexAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);
router.use("/login", loginAPI);

module.exports = router;
