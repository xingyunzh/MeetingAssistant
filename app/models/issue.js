var mongoose = require('mongoose');

var issueSchema = mongoose.Schema({
	description:String,

	result:String
});

module.exports = mongoose.model('Issue', issueSchema);
