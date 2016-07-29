var express = require("express");
var router = express.Router();

var userAPI = require("./users");


router.use("/user", userAPI);

module.exports = router;
