var express = require("express");
var token = require('../util/shared/token');
var router = express.Router();

var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");

router.use("/", verificationAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);


router.use(token.Parser);

router.use("/api/meeting", meetingAPI);
router.use("/api/user", userAPI);

module.exports = router;
