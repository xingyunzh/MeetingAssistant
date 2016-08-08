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

userSchema.methods.generateToken = function () {
    return jwt.sign(this, 'xingyunzh-secret', {expiresIn: 3600});
}

module.exports = mongoose.model('User', userSchema);
