/**
 * Created by Administrator on 2016/7/20.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    thirdPartyId: String,

    email: {
        type: String,
        index: true
    },

    fullName: String,

    createdDate: Date,

    lastLoginDate: Date
});

module.exports = mongoose.model('User', userSchema);
