var express = require("express");
var router = express.Router();

var indexAPI = require("./index-api");
var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");
var senmailAPI=require("./sendmail-api");

router.use("/", indexAPI);
router.use("/meeting", meetingAPI);
router.use("/user", userAPI);
router.use("/sendmail",senmailAPI);

module.exports = router;
