var express = require("express");
var token = require('../util/shared/token');
var router = express.Router();

var loginAPI = require("./login-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var sendmailAPI = require("./sendmail-api");
var viewAPI = require("./view-api");

router.use("/", viewAPI);
router.use("/verification", loginAPI);

router.use(token.Parser);

router.use("/api/meeting", meetingAPI);
router.use("/api/user", userAPI);

module.exports = router;