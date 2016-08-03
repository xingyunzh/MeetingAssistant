var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var umjunctionSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,

        ref: 'User'
    }

    meetingId: {
    	type: Schema.Types.ObjectId,

        ref: 'Meeting'
    }
});

module.exports = mongoose.model('UMJunction', umjunctionSchema);
