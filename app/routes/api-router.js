var express = require("express");
var router = express.Router();

var verificationAPI = require("./verification-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");

router.use("/", verificationAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);

module.exports = router;
