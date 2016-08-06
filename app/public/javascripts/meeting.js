/**
 * Created by morrieati on 8/4/16.
 */
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

$('#meeting-date').datetimepicker({
    autoclose: true,
}).on('changeDate', function (e) {
    $('.agenda-time').datetimepicker({
        autoclose: true,
        startView: 'day',
        minView: 'hour',
        maxView: 'day',
        startDate: $('#meeting-date').val()
    })
}).val(new Date().format('yyyy-MM-dd hh:mm'));