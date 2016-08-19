/**
 * Created by morrieati on 8/4/16.
 */

var mongoose=require('mongoose');
// Set UI element style

//get the meetings list
$(".meeting-status-panel:first").addClass("panel-info left-panel");
$(".meeting-status-panel:last").addClass("panel-success right-panel");
$(".meeting-status:first").text("尚未完成");
$(".meeting-status:last").text("已完成");
// End of Set UI element style

var overDocs;
var notOverDocs;
var overMeetingNum=0;
var notOverMeetingNum=0;

$.ajax({
    url: '/api/meeting/list',
    method: 'POST',
    headers: {'x-access-token': localStorage.getItem('token')}
}).done(function (data) {
    console.log(data)
    if (data.success) {
        console.log("OK");
        overDocs = data.over;
        notOverDocs = data.notOver;
        for (var i = 0; i < overDocs.length; i++) {
            overMeetingNum = overMeetingNum + 1;
            var overMeetingString = String(overMeetingNum);
            $("#left-panel").append("<div class='panel panel-default meeting-panel' id='meeting-list-panel-" + overDocs[i]._id + "'></div>");
            var newMeetingID = "#meeting-list-panel-" + overDocs[i]._id;
            $(newMeetingID).load("/views/includes/meetings/meetingPanel.ejs", function () {
                console.log("ok")
                $("#meeting-list-name")
                    .text(overDocs[i].subject)
                    .attr("id", "meeting-list-name-" + overMeetingString);
                $("#meeting-list-location")
                    .text(overDocs[i].location)
                    .attr("id", "meeting-list-location-" + overMeetingString);
                $("#meeting-list-date")
                    .text(overDocs[i].startTime.format('yyy-MM-dd hh:mm'))
                    .attr("id", "meeting-list-date-" + overMeetingString);
                $("#meeting-list-host")
                    .text(overDocs[i].host)
                    .attr("id", "meeting-list-host-" + overMeetingString);
            });
        }
        for (var i = 0; i < notOverDocs.length; i++) {
            notOverMeetingNum = notOverMeetingNum + 1;
            var notOverMeetingString = String(notOverMeetingNum);
            $("#right-panel").append("<div class='panel panel-default meeting-panel' id='meeting-list-panel-" + notOverDocs[i]._id + "'></div>");
            var newMeetingID = "#meeting-panel-" + notOverDocs[i]._id;
            $(newMeetingID).load("/views/includes/meetings/meetingPanel.ejs", function () {
                $("#meeting-list-name")
                    .text(notOverDocs[i].subject)
                    .attr("id", "meeting-list-name-" + notOverMeetingString);
                $("#meeting-list-location")
                    .text(notOverDocs[i].location)
                    .attr("id", "meeting-list-location-" + notOverMeetingString);
                $("#meeting-list-date")
                    .text(notOverDocs[i].startTime.format('yyy-MM-dd hh:mm'))
                    .attr("id", "meeting-list-date-" + notOverMeetingString);
                $("#meeting-list-host")
                    .text(notOverDocs[i].host)
                    .attr("id", "meeting-list-host-" + notOverMeetingString);
            });
        }
    }
});

// Load Data
$(document).ready(initializeData('/api/meeting'));


function initializeCreateMeetingUI() {
    $('#meeting-date-start').datetimepicker({
        autoclose: true,
    }).val(new Date().format('yyyy-MM-dd hh:mm'));

    $('#meeting-date-end').datetimepicker({
        autoclose: true,
    }).val(new Date().format('yyyy-MM-dd hh:mm'));
}

// New meeting: Agenda
var agendaNum = 0;
function newAgenda() {
    agendaNum = agendaNum + 1;

    var agendaString = String(agendaNum);
    $("#agenda").append("<div class='panel panel-default agenda-panel' id='agenda-panel-" + agendaString + "'></div>");

    var newAgendaID = "#agenda-panel-" + agendaString;
    $(newAgendaID).load("/views/agendaPanel.ejs", function () {
        $("#heading-default")
            .attr("id", "heading-" + agendaString);
        $("#title-default")
            .attr("href", "#collapse-" + agendaString)
            .attr("aria-controls", "collapse-" + agendaString)
            .attr("id", "title-" + agendaString);
        $("#num-default")
            .text("#" + agendaString)
            .attr("id", "num-" + agendaString);
        $("#collapse-default")
            .attr("aria-labelledby", "heading-" + agendaString)
            .attr("id", "collapse-" + agendaString);
    });
}

function removeAgenda(e) {
    $(e.target).parent().parent().parent().remove();
}

function newIssue(e) {
    $(e.target)
        .parent()
        .parent()
        .parent()
        .append("<div class='input-group issue-input'></div>")
        .children(".input-group")
        .last()
        .load("/views/issueItem.ejs", function () {
            $(e.target).parent().remove();
        });
}

function removeIssue(e) {
    if ($(e.target).parent().siblings().last().hasClass("input-group-addon")) {
        $(e.target)
            .parent()
            .parent()
            .prev()
            .append("<div class='input-group-addon agenda-issue-btn'><span class='glyphicon glyphicon-plus' aria-hidden='true' onclick='newIssue(event)'></span></div>")
            .next()
            .remove();
    } else {
        $(e.target)
            .parent()
            .parent()
            .remove();
    }
}


function saveMeeting() {
    $.ajax({
        url: '/api/meeting/submission',

    })
}

