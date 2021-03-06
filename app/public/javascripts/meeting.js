/**
 * Created by morrieati on 8/4/16.
 */

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
    var meetingSubject=$("#meeting-subject").val();
    
    var startTime=$("#meeting-date-start").val();
    var endTime=$("#meeting-date-end").val();
    var period='from'+startTime+'to'+endTime;
    
    var recorder=$("#meeting-recoder").val();
    
    var meetingLocation=$("#meeting-location").val();
    
    var attendees=$("#meeting-sttendees").val();
    var attendeesArray=attendees.split(',');
    
    var observers=$("#meeting-observers").val();
    var observersArray=observers.split(',');
    
    var meetingDescription=$("#meeting-description").val();

    var d = $("div#iStringTitleID .agenda-title-input").val();

    var agenda = new Array();
    for (var i = 0;i <= agendaNum-1;i++) {
        var iString = String(i);
        var iStringCollapseID = "#collapse-" + iString;
        var iStringTitleID = "#title-" + iString;

        agenda[i] = new Object();

        agenda[i].description = $("div#iStringTitleID .agenda-title-input").val();

        agenda[i].length =$("div#iStringCollapseID .agenda-time-hours").val()+"小时"+$("div#iStringCollapseID .agenda-time-minutes").val()+"分钟";

        agenda[i].alertMinutes = $("div#iStringCollapseID .agenda-alert-minutes").val();

        agenda[i].issue = new Object();
        agenda[i].issue.Description = $("div#iStringCollapseID .agenda-input").val();
    }

    var AgendaString="";
    var agendaString = new Array();
    for (var i = 0;i <= agendaNum-1;i++){
        var iString = String(i);
        var string = String(i+1);
        var iStringCollapseID = "#collapse-" + iString;
        var iStringTitleID = "#title-" + iString;
        agendaString[i] = string+":"+agenda[i].description+"  "+"议程时长："+agenda[i].length+"\n";
        AgendaString= AgendaString+agendaString[i];
    }

    if (meetingSubject !==""){
        if(startTime !==""&&endTime !==""){
            if(recorder !==""&&attendees !==""&&observers !==""){
                if(meetingLocation !==""){
                    if(meetingDescription !==""){
                        $.ajax({
                            type: 'post',
                            headers: {'x-access-token': localStorage.getItem('token')},
                            url: '/api/meeting/submission',
                            data:{
                                meetingSubject: meetingSubject,
                                startTime: startTime,
                                endTime: endTime,
                                period: period,
                                recorder: recorder,
                                meetingLocation: meetingLocation,
                                attendees:attendees,
                                attendeesArray:attendeesArray,
                                observers:observers,
                                observersArray:observersArray,
                                meetingDescription: meetingDescription,
                                d: d,
                                agenda:agenda,
                                agendaString:AgendaString,
                            },
                            success : function () {
                                alert("会议以创建，邮件已发送!")
                            }
                        })
                    }else {
                        alert("会议描述不能为空!")
                    }
                }else {
                    alert("地点不能为空!")
                }
            }else {
                alert("请补全所有参会者!")
            }
        }else{
            alert("请设定起始时间!")
        }
    }else{
        alert("主题不能为空!")
        return false;
    }
    return true;
}