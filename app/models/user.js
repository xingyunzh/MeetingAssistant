/**
 * Created by Administrator on 2016/7/20.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    name: String,
    sex: String,
    createdDate: Date,
    lastLoginDate: Date
});

module.exports = mongoose.model('User', userSchema);
