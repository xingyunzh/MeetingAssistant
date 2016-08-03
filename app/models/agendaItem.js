var mongoose = require('mongoose');

var agandaItemSchema = mongoose.Schema({
	
	title: String,

	description: String,

	startTime : Date,

	endTime : Date,

	issues : [{
		type: Schema.Types.ObjectId,
		ref : 'Issue'
	}]
});

module.exports = mongoose.model('AgendaItem', agendaItemSchema);