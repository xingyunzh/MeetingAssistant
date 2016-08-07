/**
 * Created by morrieati on 8/4/16.
 */
$.ajax({
    url: '/api/user',
    method: 'POST',
    headers: {'x-access-token': localStorage.getItem('token')}
}).done(function (data) {
    if (data.success) {
        $("#user").html(data.user + "&nbsp;<span class='caret'></span>");
    } else {
        logOut();
    }
});

$("#add-meeting-button").hide();