'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userInfo = require('../class/userInfo');

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// GET HTTPS
router.get('/:page', function (req, res) {
    var promise = new Promise(function (resolve, reject) {
        var page = req.params.page;
        var str = 'SELECT * FROM user limit 20 offset ' + 20 * (page - 1);

        var db = (0, _dbconnect.db_mysql)(str);
        resolve(db);
    });

    promise.then(function (value) {
        var promise2 = new Promise(function (resolve, reject) {
            // str += 'select count(1) from user'
            var str = 'select count(1) as count from user';
            var dbc = (0, _dbconnect.db_mysql)(str);

            resolve(dbc);
        });
        promise2.then(function (values) {
            res.send({ data: value, count: values[0].count });
        });
    });
});

// POST HTTPS
router.post('/', function (req, res) {
    var data = req.body;
    var query = '';
    var query2 = '';
    if (data.handler === 1) {
        //add
        query = 'insert into ';
    } else if (data.handler === 2) {
        // login
        query = 'select * from user where user_phone = \'' + data.user_name + '\' and user_pwd = \'' + data.user_pwd + '\'';
        query2 = 'update user set login_time = NOW() where user_id = ';
    } else if (data.handler === 3) {
        //update
        query = 'update user set user_name = ' + data.user_name + ', user_pwd = ' + data.user_pwd + ', user_role = ' + data.role + 'where user_id =' + data.user_id;
    } else {
        // delete
        query = 'delete from user where user_id =' + data.user_id;
    }
    var promise = new Promise(function (resolve, reject) {
        var db = (0, _dbconnect.db_mysql)(query);
        resolve(db);
    });

    promise.then(function (value) {
        if (query2) {
            var promise2 = new Promise(function (resolve, reject) {
                // str += 'select count(1) from user'
                var str = query2 + value[0].user_id;
                console.log(value);
                var dbc = (0, _dbconnect.db_mysql)(str);

                resolve(dbc);
            });
            promise2.then(function (value2) {
                var values = JSON.stringify(value);
                values = JSON.parse(values);
                res.send(values);
            });
        } else {
            var values = JSON.stringify(value);
            values = JSON.parse(values);
            res.send(values);
        }
    });
});

module.exports = router;