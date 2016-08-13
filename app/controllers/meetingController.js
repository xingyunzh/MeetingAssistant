var Meeting = require("../models/meeting");
var AgendaItem = require("../models/agendaItem");
var Issue = require("../models/issue")
var Meeting = require("../models/meeting");
var UMJunction = require("../models/umjunction");
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var util = require("../util/shared/util");

var sendmailController = require('./sendmailController');

exports.createMeetingById = function (req, res) {
	console.log("body:",req.body);
	var meeting = {
		tohostmail: '1443093525@qq.com',
		torecodermail: req.body.recorder,
		toattendeesmail: req.body.attendees,
		toobserversmail: req.body.observers,
		subject: req.body.meetingSubject,
		period: req.body.period,
		location: req.body.meetingLocation,
		description: req.body.meetingDescription,
		agenda: 'xxxxxxxx'
	};
	sendmailController.sendmail(meeting,function next(){
		console.log("发送完毕!")
	});
	var newMeeting = new Meeting({
		subject: req.body.subject,
		description: req.body.meetingDescription,
		location: req.body.meetingLocation,
		//startTime: req.data.startTime,
		//endTime: req.data.endTime,
		isOver: false,
		isRepeat: false,
		attendees: req.body.attendeesArray,
		observers: req.body.observersArray,
		//genda: [{
			//type: Schema.Types.ObjectId,
			//ref: 'AgendaItem'
		//}],
		//alertTime: Date,
		//host: {
			//type: Schema.Types.ObjectId,
			//ref: 'User'
		//},
		recorder: req.body.recorder,
		//meetingMinutes: ''
	});
	newMeeting.save(function (err, rawResponse) {
		if (err) errorHandler(res, err, 'Cannot save to Database !');
	});
	res.json();
}

exports.updateMeetingById = function (req, res) {

}

exports.deleteMeetingById = function (req, res) {

}

exports.getMeetingsByUserId = function (req, res) {

}

exports.getMeetingById = function (req, res) {
	var meetingId = req.body.meetingId;

	Meeting
		.findOne(meetingId)
		.populate('host')
		.populate('agenda')
		.exec(function (err, meetingResult) {
			if (err) {
				errorHandler(err);
			} else {
				UMJunction
					.find({meetingId: meetingId})
					.exec(function (err, usersResult) {
						if (err) {
							errorHandler(err);
						} else {
							res.send(util.wrapBody({meeting: meetingResult, users: usersResult}, 'S'));
						}
					})
			}
		});
};

exports.getDoneMeetingNum = function (req, res) {
	Meeting
		.find({isOver: true})
		.exec(function (err, docs) {
			return docs;
		})
}
