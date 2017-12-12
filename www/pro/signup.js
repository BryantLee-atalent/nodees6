'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('/:sta', function (req, res) {
    var str = 'select * from mechanism where mechanism = ' + req.params.sta;
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/status', function (req, res) {
    var data = req.body;
    var str = 'update mechanism set mechanism_status = ' + data.status + ', mechanism_reson = \'' + data.reson + '\'';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;