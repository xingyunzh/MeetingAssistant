/**
 * Created by Administrator on 2016/7/20.
 */
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
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

userSchema.methods.generateToken = function (expiresTime) {
    return jwt.sign(this, 'xingyunzh-secret', {expiresIn: expiresTime});
}

module.exports = mongoose.model('User', userSchema);
