var mongoose = require('mongoose');

var automodelSchema = mongoose.Schema({
    email: String,


});

module.exports = mongoose.model('automodel', automodelSchema);