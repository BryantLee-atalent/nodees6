'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _buffer = require('buffer');

var _buffer2 = _interopRequireDefault(_buffer);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// 封面图
router.post('/banner', function (req, res) {
    var str = 'select * from index_image where image_handler = 1';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// 分榜单下拉框
router.post('/small_1', function (req, res) {
    var str = 'select small_id, small_name from small';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// 封面 top3 大榜单
router.post('/forms_big', function (req, res) {
    var str = 'select *  from forms where forms_status = 1 order by forms_id desc limit 1 \n';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// 封面 根据大榜单 查询分榜单
router.post('/forms_small', function (req, res) {
    var data = req.body;
    var str = 'select *  from small where forms_id = ' + data.forms_id + ' order by small_id desc limit 3 \n';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// 根据分榜单查询机构
router.post('/forms_small', function (req, res) {
    var data = req.body;
    var str = 'select *  from mechanism where small_id = ' + data.small_id + ' order by mechanism_ticket desc limit 3 \n';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/mechanism_apply', function (req, res) {
    var data = req.body;
    var str = 'insert into mechanism(mechanism_name, mechanism_src, mechanism_desc,mechanism_phone,mechanism_date) values (\'' + data.mechanism_name + '\',\'' + data.mechanism_src + '\',\'' + data.mechanism_desc + '\', \'' + data.mechanism_phone + '\', \'' + data.mechanism_date + '\')';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/forms', function (req, res) {
    var data = req.body;
    var str = 'select * from forms where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/small_mechanism', function (req, res) {
    var data = req.body;
    var str = 'select * from mechanism where small_id = ' + data.small_id + 'order by mechanism_ticket desc';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/mechanism', function (req, res) {
    var data = req.body;
    var str = 'select * from mechanism where mechanism_id = ' + data.mechanism_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/ticket', function (req, res) {
    var data = req.body;
    var str = 'update  mechanism set mechanism_ticket = ' + data.mechanism_ticket + 'where mechanism_id = ' + data.mechanism_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;