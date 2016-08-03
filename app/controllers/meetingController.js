var Meeting = require("../models/meeting");
var util = require("../util/shared/util");

exports.createMeeting = function (req, res) {

};


exports.updateMeeting = function (req, res) {

};

exports.getMeetingsByUserId = function(req,res) {
	
};

exports.getMeetingById = function(req,res) {
	
};

exports.getDoneMeetingNum = function (req, res) {
    Meeting
        .find({isOver: true})
        .exec(function (err, docs) {
            return docs;
        })
};

