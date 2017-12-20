'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('', function (req, res) {
    var str = '\n' + 'select a.mechanism_id,a.mechanism_name,a.mechanism_status,a.mechanism_reson,a.mechanism_ticket,b.small_url,b.small_endtime ,b.small_id,b.small_icon,c.forms_name,c.forms_desc from mechanism as a inner join small as b on a.small_id = b.small_id inner join forms as c on b.forms_id = c.forms_id';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/vote', function (req, res) {
    var data = req.body;
    var str = 'update mechanism set mechanism_status = ' + data.status + ', mechanism_reson = \'' + data.reson + '\'';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

module.exports = router;