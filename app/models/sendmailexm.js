/**
 * Created by asus on 2016/7/30 0030.
 */
var sendmailController = require("../controllers/sendmailController")
var options= new Object ();
options.tomail='peter.cheng@xingyunzh.com';
options.sta='recoder';
options.meetingtime='6.28';
options.place='summerbooks';
options.meetingname='Meeting name';
options.des='Meeting descriptions';
options.agen='xxxxxxxxxxxxxxxxxxxxxxxxx' +
    'xxxxxxxxxxxxxxxxxxxxx'

sendmailController.sendmail(options);
