'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('/:sta', function (req, res) {
    var str = 'select * from forms where forms_status = ' + req.params.sta;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/sta', function (req, res) {
    var data = req.body;
    var str = 'update forms set forms_status =  ' + data.forms_status + ' where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/insert', function (req, res) {
    var data = req.body;
    var str = 'insert into forms(forms_name, forms_desc) values(\'' + data.forms_name + '\', \'' + data.forms_desc + '\')';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/delete', function (req, res) {
    var data = req.body;
    var str = 'delete  from forms where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/update', function (req, res) {
    var data = req.body;
    var str = 'update forms set forms_name = \'' + data.forms_name + '\', forms_desc = \'' + data.forms_desc + '\' where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/addTicket', function (req, res) {
    var data = req.body;
    var str = 'update forms set small_count = (small_count + 1) where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

router.post('/jTicket', function (req, res) {
    var data = req.body;
    var str = 'update forms set small_count = (small_count - 1) where forms_id = ' + data.forms_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;