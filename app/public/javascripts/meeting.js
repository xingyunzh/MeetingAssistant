/**
 * Created by morrieati on 8/4/16.
 */


var overDocs;
var notOverDocs;

$.ajax({
    url: '/api/meeting/list',
    method: 'POST',
    headers: {'x-access-token': localStorage.getItem('token')}
}).done(function (data) {
    if (data.success) {
        overDocs=data.over;
        notOverDocs=data.notOver;

            var sub="",time="",loc="",host="";
            for(var i=0;i<overDocs.length;i++)
            {

                sub=sub+overDocs[i].subject;
                time=time+overDocs[i].startTime;
                loc=loc+overDocs[i].location;
                host=host+overDocs[i].host;
            }
            document.getElementById("meeting-name").innerHTML=sub;
            document.getElementById("meeting-date").innerHTML=time;
            document.getElementById("meeting-location").innerHTML=loc;
            document.getElementById("meeting-host").innerHTML=host;
        }

});


// Set UI element style

$(".meeting-status-panel:first").addClass("panel-info");
$(".meeting-status-panel:last").addClass("panel-success");
$(".meeting-status:first").text("Not over yet");
$(".meeting-status:last").text("Over");
// End of Set UI element style

// Load Data
$(document).ready(initializeData('/api/meeting'));


function initializeCreateMeetingUI() {
    $('#meeting-date-start').datetimepicker({
        autoclose: true,
    }).on('changeDate', function (e) {
        $('.agenda-time-start').datetimepicker({
            autoclose: true,
            startView: 'day',
            minView: 'hour',
            maxView: 'day',
            startDate: $('#meeting-date-start').val()
        })
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
    $("#agenda").append("<div class='panel panel-default' id='agenda-panel-" + agendaString + "'></div>");
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

