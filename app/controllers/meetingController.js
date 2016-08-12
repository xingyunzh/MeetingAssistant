var Meeting = require("../models/meeting");
var sendmailController = require("/controllers/sendmailController")
var UMJunction = require("../models/umjunction");
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var util = require("../util/shared/util");

exports.createMeetingById = function (req, res) {
	var meetingSubject = req.body.meetingSubject;
	var startTime = req.body.startTime;
	var endTime = req.body.endTime;
	var period = req.body.period;
	var recorder = req.body.recorder;
	var meetingLocation = req.body.meetingLocation;
	var attendees = req.body.attendees;
	var attendeesArray = req.body.attendeesArray;
	var observers = req.body.observers;
	var observersArray = req.body.observersArray;
	var meetingDescription = req.body.meetingDescription;

	var meeting = new Meeting({
		subject: meetingSubject,
		description: meetingDescription,
		location: meetingLocation,
		startTime: startTime,
		endTime: endTime,
		//isOver: Boolean,
		//isRepeat: Boolean,
		attendees:attendeesArray,
		observers:observersArray,
		//agenda: [{
		//   type: Schema.Types.ObjectId,
		//   ref: 'AgendaItem'
		//}],
		//alertTime: Date,
		//host: {
		//   type: Schema.Types.ObjectId,
		//   ref: 'User'
		//},
		recorder: recorder,
		//meetingMinutes: String
	});

	meeting.save(function (err, rawResponse) {
		if (err) errorHandler(res, err, 'Cannot save to Database !');
	});

	var meeting= new Object ();
	meeting.tohostmail='peter.cheng@xingyunzh.com';
	meeting.torecodermail=recorder;
	meeting.toattendeesmail=attendees;
	meeting.toobserversmail=observers;
	meeting.subject=meetingSubject;
	meeting.period=period;
	meeting.location=meetingLocation;
	meeting.description=meetingDescription;
	meeting.agenda='xxxxxxxxxxxxxxxxxxxxxxxxx' +
		'xxxxxxxxxxxxxxxxxxxxx';

	sendmailController.sendmail(meeting);
}

exports.updateMeetingById = function (req, res) {

}

exports.deleteMeetingById = function (req, res) {

}

exports.getMeetingsByUserId = function(req,res) {
	
}

exports.getMeetingById = function(req,res) {
	var meetingId = req.body.meetingId;

	Meeting
		.findOne(meetingId)
		.populate('host')
		.populate('agenda')
		.exec(function(err,meetingResult){
			if (err) {
				errorHandler(err);
			}else{
				UMJunction
				.find({meetingId:meetingId})
				.exec(function(err,usersResult){
					if (err) {
						errorHandler(err);
					}else{
						res.send(util.wrapBody({meeting:meetingResult,users:usersResult},'S'));
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
