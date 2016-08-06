var request = require('request');
var jwt = require('jsonwebtoken');
var Auto = require("../models/automodel");

exports.autofun = function (req, res) {
    var email = req.body.email;
    var email = {"3237777@qq.com","456999@qq.com","61771217@qq.com","5332999@qq.com","611217@qq.com","99312199@qq.com",
    "2327777@qq.com","9889999@qq.com","12137@qq.com","9992129@qq.com","34567777@qq.com","21214212@qq.com",
    "4567777@qq.com","5499@qq.com","3322477@qq.com","3121199@qq.com","1233237777@qq.com","212129999@qq.com"};

    var key = email;
    if(key.length() != 0){
    var json="[";
    for(int i = 0; i < email.length; i++) {
    if(email[i].startsWith(key)){
    json += "\""+ words[i] + "\"" + ",";
    }
    }
    json = json.substring(0,json.length()-1>0?json.length()-1:1);
    json += "]";

    console.log("json:" + json);

    }

    }