var mongoose = require('mongoose');

var umjunctionSchema = mongoose.Schema({
	userId:{
		type:Schema.Types.ObjectId,

		ref:'user'
	}
});

module.exports = mongoose.model('UMJunction', umjunctionSchema);
