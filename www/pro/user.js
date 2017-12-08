'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userInfo = require('../class/userInfo');

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// GET HTTPS
router.get('/', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
        var db = (0, _dbconnect.db_mysql)('select * from user');
        resolve(db);
    });

    promise.then(function (value) {
        var values = JSON.stringify(value);
        values = JSON.parse(values);
        res.send(values);
    });
});

// POST HTTPS
router.post('/', function (req, res) {
    var data = req.body;
    var query = '';
    if (data.handler === 1) {
        //add
        query = 'insert into ';
    } else if (data.handler === 2) {
        // login
        query = 'select * from user where (user_name = ' + data.user_name + '  or user_phone=' + data.user_name + ') or user_pwd = ' + data.user_pwd;
    } else if (data.handler === 3) {
        //update
        query = 'update user set user_name = ' + data.user_name + ', user_pwd = ' + data.user_pwd + ', user_role = ' + data.role + 'where user_id =' + data.user_id;
    } else {
        // delete
        query = 'delete from user where user_id =' + data.user_id;
    }
    var promise = new Promise(function (resolve, reject) {
        var db = (0, _dbconnect.db_mysql)('select * from user');
        resolve(db);
    });

    promise.then(function (value) {
        var values = JSON.stringify(value);
        values = JSON.parse(values);
        res.send(values);
    });
    res.send(req.body);
});

module.exports = router;