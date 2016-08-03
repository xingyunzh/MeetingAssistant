var Meeting = require("../models/meeting");
var errorHandler = require('../util/shared/errorHandler').errorHandler;
var util = require("../util/shared/util");

exports.createMeetingById = function (req, res) {

};

exports.updateMeetingById = function (req, res) {

};

exports.deleteMeetingById = function (req, res) {

};

exports.getMeetingsByUserId = function(req,res) {
	
};

exports.getMeetingById = function(req,res) {
	var meetingId = req.body.meetingId;

	Meeting
		.findOne(meetingId)
		.populate('host')
		.populate('UMJunction')
		.populate('recorder')
		.exec(function(err,result){
			if (err) {
				errorHandler(err);
			}else{
				res.send(util.wrapBody(result,'S'));
			}
		});
};

exports.getDoneMeetingNum = function (req, res) {
    Meeting
        .find({isOver: true})
        .exec(function (err, docs) {
            return docs;
        })
};

