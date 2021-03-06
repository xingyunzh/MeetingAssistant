exports.sendmail=function (options,next) {
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
    var mailOptionsTohost = {
        from: '1443093525@qq.com', // 发件地址
        to: options.tohostmail, // 收件列表
        subject: 'Meeting invitation', // 标题
        //text和html两者只支持一种
        //text: 'Hello world ?', // 标题
        html:'<b>Dear sir/madam:</b>'+
        '<br>It is delighted that you have accepted our invitation to attend the Conference as a host.'+
        '<br>About the arrangements for the meeting as follows:'+
        '<br>1.Meeting subject:'+options.subject+
        '<br>2.Meeting time:'+options.period+
        '<br>3.Meeting place:'+options.location+
        '<br>4.Conference description:'+options.description+
        '<br>5.Agenda:'+options.agenda+
        '<p>Please go here to enter <a href="{{ reset }}">MeetingAssistant</a></p>'+
        '<p><a href="{{ reset }}">Click here</a>to add the meeting to your canlendar.</p>'
    };
    var mailOptionsIorecorder = {
        from: '1443093525@qq.com', // 发件地址
        to: options.torecodermail, // 收件列表
        subject: 'Meeting invitation', // 标题
        //text和html两者只支持一种
        //text: 'Hello world ?', // 标题
        html:'<b>Dear sir/madam:</b>'+
        '<br>It is delighted that you have accepted our invitation to attend the Conference as a recoder.'+
        '<br>About the arrangements for the meeting as follows:'+
        '<br>1.Meeting subject:'+options.subject+
        '<br>2.Meeting time:'+options.period+
        '<br>3.Meeting place:'+options.location+
        '<br>4.Conference description:'+options.description+
        '<br>5.Agenda:'+options.agenda+
        '<p>Please go here to enter <a href="{{ reset }}">MeetingAssistant</a></p>'+
        '<p><a href="{{ reset }}">Click here</a>to add the meeting to your canlendar.</p>'
    };
    var mailOptionsToattendees = {
        from: '1443093525@qq.com', // 发件地址
        to: options.toattendeesmail, // 收件列表
        subject: 'Meeting invitation', // 标题
        //text和html两者只支持一种
        //text: 'Hello world ?', // 标题
        html:'<b>Dear sir/madam:</b>'+
        '<br>It is delighted that you have accepted our invitation to attend the Conference as an attendee.'+
        '<br>About the arrangements for the meeting as follows:'+
        '<br>1.Meeting subject:'+options.subject+
        '<br>2.Meeting time:'+options.period+
        '<br>3.Meeting place:'+options.location+
        '<br>4.Conference description:'+options.description+
        '<br>5.Agenda:'+options.agenda+
        '<p>Please go here to enter <a href="{{ reset }}">MeetingAssistant</a></p>'+
        '<p><a href="{{ reset }}">Click here</a>to add the meeting to your canlendar.</p>'
    };
    var mailOptionsToobservers = {
        from: '1443093525@qq.com', // 发件地址
        to: options.toobserversmail, // 收件列表
        subject: 'Meeting invitation', // 标题
        //text和html两者只支持一种
        //text: 'Hello world ?', // 标题
        html:'<b>Dear sir/madam:</b>'+
        '<br>It is delighted that you have accepted our invitation to attend the Conference as an observer.'+
        '<br>About the arrangements for the meeting as follows:'+
        '<br>1.Meeting subject:'+options.subject+
        '<br>2.Meeting time:'+options.period+
        '<br>3.Meeting place:'+options.location+
        '<br>4.Conference description:'+options.description+
        '<br>5.Agenda:'+options.agenda+
        '<p>Please go here to enter <a href="{{ reset }}">MeetingAssistant</a></p>'+
        '<p><a href="{{ reset }}">Click here</a>to add the meeting to your canlendar.</p>'
    };
// send mail with defined transport object
    transporter.sendMail(mailOptionsTohost,function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
    transporter.sendMail(mailOptionsIorecorder,function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
    transporter.sendMail(mailOptionsToattendees,function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
    transporter.sendMail(mailOptionsToobservers,function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
    next();
}