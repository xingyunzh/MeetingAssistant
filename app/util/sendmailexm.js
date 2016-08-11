/**
 * Created by asus on 2016/7/30 0030.
 */
var sendmailController = require("../../controllers/sendmailController")
var Meeting=require('../models/meeting')

var meetingsubject=$("#meeting-subject").val();
var startTime=$("#meeting-date-start").val();
var endTime=$("#meeting-date-end").val();
var period='from'+startTime+'to'+endTime;
var recorder=$("#recoder-reset").val();
var meetinglocation=$("#meeting-location").val();
var attendees=$("#attendees-reset").val();
var attendeesarray=string.split(',');
var observers=$("#observer-reset").val();
var observersarray=string.split(',');
var meetingdescription=$("#meeting-description").val();
//这里包装需要处理前端数据
var meeting=new Meeting({
    subject: meetingsubject,
    description: meetingdescription,
    location: meetinglocation,
    startTime: startTime,
    endTime: endTime,
    //isOver: Boolean,
    //isRepeat: Boolean,
    attendees:attendeesarray,
    observers:observersarray,
    //agenda: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'AgendaItem'
    //}],
    //alertTime: Date,
    //host: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User'
    //},
    recorder: recorder,
    //meetingMinutes: String
});
//传给后台
var meeting= new Object ();
meeting.tohostmail='peter.cheng@xingyunzh.com';
meeting.torecodermail=recorder;
meeting.toattendeesmail=attendees;
meeting.toobserversmail=observers;
meeting.subject=meetingsubject;
meeting.period=period;
meeting.location=meetinglocation;
meeting.description=meetingdescription;
meeting.agenda='xxxxxxxxxxxxxxxxxxxxxxxxx' +
    'xxxxxxxxxxxxxxxxxxxxx';
//将处理后的数据包装成options对象从而调用邮件功能


sendmailController.sendmail(meeting);
