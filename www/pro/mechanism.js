'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('/', function (req, res) {
    var str = 'select * from mechanism';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/search', function (req, res) {
    var str = 'select * from mechanism where mechanism_name like  \'%' + req.body.searchString + '%\'';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/delete', function (req, res) {
    var str = 'delete  from mechanism where mechanism_id = ' + req.body.mechanism;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/insert', function (req, res) {
    var data = req.body;
    var str = 'insert into mechanism(mechanism_name, mechanism_src, mechanism_desc) values (\'' + data.mechanism_name + '\',\'' + data.mechanism_src + '\',\'' + data.mechanism_desc + '\')';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/update', function (req, res) {
    var data = req.body;
    var str = 'update mechanism set mechanism_name = \'' + data.mechanism_name + '\', mechanism_src = \'' + data.mechanism_src + '\', mechanism_desc = \'' + data.mechanism_desc + '\' where mechanism_id = ' + data.mechanism_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;