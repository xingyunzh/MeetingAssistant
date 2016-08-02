var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meetingSchema = Schema({
    subject: String,

    description: String,

    location: String,

    startTime: Date,

    endTime: Date,

    isOver: Boolean,

    isRepeat: Boolean,

    agenda: [{
        type: Schema.Types.ObjectId,
        ref: 'AgendaItem'
    }],

    alertTime: Date,

    host: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    recorder: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    meetingMinutes: String
});

module.exports = mongoose.model('Meeting', meetingSchema);