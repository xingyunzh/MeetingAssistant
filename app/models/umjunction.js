var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var umjunctionSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true
    },

    meetingId: {
        type: Schema.Types.ObjectId,
        ref: 'Meeting',
        index: true
    },

    type: String
});

module.exports = mongoose.model('UMJunction', umjunctionSchema);
