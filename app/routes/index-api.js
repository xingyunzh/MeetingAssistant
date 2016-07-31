/**
 * Created by morrieati on 16/7/29.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Index', user: 'Login'});
});

module.exports = router;