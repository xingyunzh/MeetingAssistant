var Meeting = require("../models/meeting");
var UMJunction = require("../models/umjunction");
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var util = require("../util/shared/util");

var sendmailController = require('./sendmailController');

exports.createMeetingById = function (req, res) {
    var meeting = {
        tohostmail: '',
        torecodermail: req.data.recorder,
        toattendeesmail: req.data.attendees,
        toobserversmail: req.data.observers,
        subject: req.data.meetingSubject,
        period: req.data.period,
        location: req.data.meetingLocation,
        description: req.data.meetingDescription,
        agenda: ''
    };

    sendmailController.sendmail(meeting);

    var newMeeting = new Meeting({
        subject: req.data.subject,
        description: req.data.meetingDescription,
        location: req.data.meetingLocation,
        startTime: req.data.startTime,
        endTime: req.data.endTime,
        isOver: false,
        isRepeat: false,
        attendees: req.data.attendeesArray,
        observers: req.data.observersArray,
        agenda: [{
            type: Schema.Types.ObjectId,
            ref: 'AgendaItem'
        }],
        alertTime: Date,
        host: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        recorder: req.data.recorder,
        meetingMinutes: ''
    });

    newUser.save(function (err, rawResponse) {
        if (err) errorHandler(res, err, 'Cannot save to Database !');
    });
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
