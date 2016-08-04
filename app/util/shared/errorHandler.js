/**
 * Created by morrieati on 8/3/16.
 */
var express = require('express');
var util = require('./util');

exports.errorHandler = function (res, error, msg) {
    console.error(error);
    res.json(util.wrapBody({
        success: false,
        message: msg
    }, 'E'));
}