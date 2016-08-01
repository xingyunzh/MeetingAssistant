/**
 * Created by morrieati on 16/7/29.
 */
var express = require('express');
var router = express.Router();

//var indexController = require('')

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Index'});
});

module.exports = router;