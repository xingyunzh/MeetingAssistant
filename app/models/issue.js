var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = Schema({
    description: String,

    result: String
});

module.exports = mongoose.model('Issue', issueSchema);
