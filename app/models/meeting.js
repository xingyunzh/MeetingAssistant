var mongoose = require('mongoose');

var meetingSchema = mongoose.Schema({
    subject: String,

    description: String,

    location: String,

    startTime: Date,

    endTime: Date,

    isRepeat: Boolean,

    agenda:[{
    	type:Schema.Types.ObjectId,
    	ref:'AgendaItem'
    }],

    alertTime: Date,

    host: {
    	type:Schema.Types.ObjectId,
    	ref:'User'
    },

    recorder: {
    	type:Schema.Types.ObjectId,
    	ref:'User'
    },

    meetingMinutes: String
});

module.exports = mongoose.model('Meeting', meetingSchema);