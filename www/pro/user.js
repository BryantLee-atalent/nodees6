'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userInfo = require('../class/userInfo');

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
        var db = (0, _dbconnect.db_mysql)('select * from user');
        resolve(db);
    });

    promise.then(function (value) {
        var values = JSON.stringify(value);
        values = JSON.parse(values);
        res.send(values[0].user_pwd);
    });
});

router.post('/', function (req, res) {
    var data = {
        'user_name': req.body.user_name,
        'user_pwd': req.body.user_pwd,
        'handler': req.body.handler
    };
    res.send(data);
});

module.exports = router;