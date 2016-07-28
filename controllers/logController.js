/**
 * Created by morrieati on 7/28/16.
 */
exports.verifyID = function (req, res, next) {
    console.log(req.body.username);
    res.send("ok");
};