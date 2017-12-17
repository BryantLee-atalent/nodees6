'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('/:sta', function (req, res) {
    var str = 'select * from small where small_status = ' + req.params.sta;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/sta', function (req, res) {
    var data = req.body;
    var str = 'update small set small_status =  ' + data.small_status + ' where small_id = ' + data.small_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/update', function (req, res) {
    var data = req.body;
    var str = 'update small set small_icon = \'' + data.small_icon + '\', small_banner = \'' + data.small_banner + '\', small_desc = \'' + data.small_desc + '\', small_url= \'' + data.small_url + '\',\'' + data.small_name + '\',mechanism_ids = \'' + data.mechanism_ids + '\', small_endtime = \'' + data.small_endtime + '\', small_datetime = \'' + data.small_datetime + '\' where small_id = ' + data.small_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/delete', function (req, res) {
    var data = req.body;
    var str = 'delete  small forms where small_id = ' + data.small_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/insert', function (req, res) {
    var data = req.body;
    var str = 'insert into small(small_icon,small_banner,small_desc,small_url,small_name,mechanism_ids, small_datetime, small_endtime) values(\'' + data.small_icon + '\',\'' + data.small_banner + '\', \'' + data.small_desc + '\',\'' + data.small_url + '\',\'' + data.small_name + '\',\'' + data.mechanism_ids + '\', small_datetime = \'' + data.small_datetime + '\', small_endtime = \'' + data.small_endtime + '\')';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/vote', function (req, res) {
    var data = req.body;
    var str = 'update small set small_vote = ' + data.small_vote + 'where small_id = ' + data.small_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;