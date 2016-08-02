/**
 * Created by asus on 2016/7/30 0030.
 */
var sendmailController = require("../controllers/sendmailController")
var options= new Object ();
options.torecodermail='peter.cheng@xingyunzh.com';
options.toconventionermail='peter.cheng@xingyunzh.com';
options.meetingtime='6.28';
options.place='summerbooks';
options.meetingname='Meeting name';
options.des='Meeting descriptions';
options.agen='xxxxxxxxxxxxxxxxxxxxxxxxx' +
    'xxxxxxxxxxxxxxxxxxxxx'

sendmailController.sendmail(options);
