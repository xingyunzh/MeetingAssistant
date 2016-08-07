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
    }
});

// function change() {
//     var sub="",time="",loc="",host="";
//     for(var i=0;i<over.length;i++)
//     {
//         sub=sub+over[i].subject;
//         time=time+over[i].startTime;
//         loc=loc+over[i].location;
//         host=host+over[i].host;
//     }
//     document.getElementById("meeting-name").innerHTML=sub;
//     document.getElementById("meeting-date").innerHTML=time;
//     document.getElementById("meeting-location").innerHTML=loc;
//     document.getElementById("meeting-host").innerHTML=host;
// }