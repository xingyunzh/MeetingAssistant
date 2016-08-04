var Meeting = require("../models/meeting");
var UMJunction = require("../models/umjunction");
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var util = require("../util/shared/util");

exports.createMeetingById = function (req, res) {

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
            res.send(docs);
        })
}

exports.getNotDoneMeetingNum=function (req,res) {
    Meeting
        .find({isOver:false})
        .exec(function (err,docs) {
            return docs;
        })
}
