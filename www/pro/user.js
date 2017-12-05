'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userInfo = require('../class/userInfo');

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res) {
    var db = new _dbconnect.db_mysql();
    db.connStart();
    db.connExec('select * from user', function ($scope) {
        db.connEnd();
        var user = db.result;
        res.send(user);
    });
});

module.exports = router;