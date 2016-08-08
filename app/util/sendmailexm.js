/**
 * Created by asus on 2016/7/30 0030.
 */
var sendmailController = require("./../controllers/sendmailController")








//这里包装需要处理前端数据
var options= new Object ();
options.torecodermail='peter.cheng@xingyunzh.com';
options.toconventionermail='peter.cheng@xingyunzh.com';
options.subject=$("#meeting-subject").val();
options.location=$("#meeting-location").val();
options.description=$("#meeting-description").val();
options.agenda='xxxxxxxxxxxxxxxxxxxxxxxxx' +
    'xxxxxxxxxxxxxxxxxxxxx';
//将处理后的数据包装成options对象从而调用邮件功能


sendmailController.sendmail(options);
