exports.sendmail=function (options) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        //https://github.com/andris9/nodemailer-wellknown#supported-services 支持列表
        service: 'qq',
        port: 465, // SMTP 端口
        secureConnection: true, // 使用 SSL
        auth: {
            user: '1443093525@qq.com',
            //这里密码不是qq密码，是你设置的smtp密码
            pass: 'pxtpvagcltljhjgh'
        }
    });

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: '1443093525@qq.com', // 发件地址
        to: options.tomail.toString(), // 收件列表
        subject: 'Meeting invitation', // 标题
        //text和html两者只支持一种
        //text: 'Hello world ?', // 标题
        html: '<b>Dear sir/madam:</b>' +
        '<br>I am delighted that you have accepted our invitation to attend the Conference as a/an '+options.sta+
        '<br>About the arrangements for the meeting as follows:' +
        '<br>1.Meeting time:'+ options.meetingtime.toString()+
        '<br>2.Meeting place:'+options.place.toString()+
        '<br>3.Meeting name:'+options.meetingname.toString()+
        '<br>4.Conference description:'+options.des.toString()+
        '<br>5.The agenda:'+options.agen.toString()// html 内容
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
}