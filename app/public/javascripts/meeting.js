/**
 * Created by morrieati on 8/4/16.
 */
var agendaNum = 0;

$.ajax({
    url: '/api/meeting',
    method: 'POST',
    headers: {'x-access-token': localStorage.getItem('token')}
}).done(function (data) {
    if (data.success) {
        $("#user").html(data.user + "&nbsp;<span class='caret'></span>");
    } else {
        logOut();
    }
});

$(".meeting-status-panel:first").addClass("panel-info");
$(".meeting-status-panel:last").addClass("panel-success");
$(".meeting-status:first").text("Not over yet");
$(".meeting-status:last").text("Over");

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

function newAgenda() {
    agendaNum = agendaNum + 1;
    var agendaString = String(agendaNum);
    $("#agenda").append("<div class='panel panel-default' id='agenda-panel-" + agendaString + "'></div>");
    var newAgendaID = "#agenda-panel-" + agendaString;
    $(newAgendaID).load("views/agendaPanel.ejs", function () {
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
        .load("views/issueItem.ejs", function () {
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