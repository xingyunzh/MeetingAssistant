var express = require("express");
var router = express.Router();

var userAPI = require("./user-api");
var meetingAPI = require("./meeting-api");

router.use("/meeting",meetingAPI);
router.use("/user", userAPI);

module.exports = router;
