var mongoose = require('mongoose');

var meetingSchema = mongoose.Schema({
    name: String,
    password: String,
    date: Date,
    status: String
});

module.exports = mongoose.model('Meeting', meetingSchema);