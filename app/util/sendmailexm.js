/**
 * Created by asus on 2016/7/30 0030.
 */
var sendmailController = require("./../controllers/sendmailController")

var startTime=$("#meeting-date-start").val();
var endTime=$("#meeting-date-end").val();
var period='from'+startTime+'to'+endTime;

//这里包装需要处理前端数据
var meeting= new Object ();
meeting.tohost='peter.cheng@xingyunzh.com';
meeting.torecodermail='peter.cheng@xingyunzh.com';
meeting.toconventionermail='peter.cheng@xingyunzh.com';
meeting.toattendermail='peter.cheng@xingyunzh.com';
meeting.subject=$("#meeting-subject").val();
meeting.period=period;
meeting.location=$("#meeting-location").val();
meeting.description=$("#meeting-description").val();
meeting.agenda='xxxxxxxxxxxxxxxxxxxxxxxxx' +
    'xxxxxxxxxxxxxxxxxxxxx';
//将处理后的数据包装成options对象从而调用邮件功能


sendmailController.sendmail(meeting);
