var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login');
})

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/meeting/menu', function (req, res) {
    res.render('meeting');
});

router.get('/meeting/:id/', function (req, res) {
    res.render('hostview', {meetingId: req.params.id});
});


module.exports = router;