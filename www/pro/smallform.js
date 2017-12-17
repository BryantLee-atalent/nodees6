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
router.post('/', function (req, res) {
    var data = req.body.imageData;
    var str = 'update index_image set image_handler = 0';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        var addStr = 'insert into index_image (image_src, image_handler) values( \' ' + data + '\', 1)';
        (0, _dbconnect.db_mysql)(addStr).then(function (value2) {
            res.send(value2);
        });
    });
});

router.post('/delete', function (req, res) {
    var data = req.body;
    var str = 'delete  small forms where small_id = ' + data.small_id;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;