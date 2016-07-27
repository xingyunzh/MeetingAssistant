var User = require("../models/user");

exports.logStatus = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var result;
    if (username == "morris.liu" && password == "8de155dca0a7c7eafa46fe4dfe747c3a") {
        result = "succeed";
    } else if (username == "hahn.chen" && password == "f16d4ef04b6c028a4d0ab57122cfeaf0") {
        result = "succeed";
    } else {
        result = "failed";
    }
    res.send(result);

    var user = new User({
        name: username,
        password: password,
        date: new Date(),
        status: result
    });
    user.save(function (err, user) {
        if (err) return console.error(err);
    });
    console.log("Log Saved");
}