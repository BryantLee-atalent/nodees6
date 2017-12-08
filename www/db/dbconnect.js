'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.db_mysql = db_mysql;

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function db_mysql(query) {
    var me = this;
    var data = void 0;
    var promise = new Promise(function (resolve, reject) {
        var conn = _mysql2.default.createConnection({
            host: '118.126.109.20',
            user: 'bryant',
            password: 'leekobe24',
            database: 'wechat',
            multipleStatements: true
        });

        conn.connect();
        conn.query(query, function (err, result, fields) {
            if (err) throw err;
            resolve(result);
            conn.end();
        });
    });

    promise.then(function (value) {
        // success
        return value;
    }, function (value) {
        // fail
    });
    return promise;
}