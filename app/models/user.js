/**
 * Created by Administrator on 2016/7/20.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    password: String,
    date: Date,
    status: String
});

module.exports = mongoose.model('User', userSchema);
