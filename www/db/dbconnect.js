'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.db_mysql = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db_mysql = exports.db_mysql = function () {
    function db_mysql() {
        _classCallCheck(this, db_mysql);

        this.dbConn = _mysql2.default.createConnection({
            host: '118.126.109.20',
            user: 'bryant',
            password: 'leekobe24',
            database: 'wechat'
        });
    }

    _createClass(db_mysql, [{
        key: 'connStart',
        value: function connStart() {
            this.dbConn.connect();
        }
    }, {
        key: 'connExec',
        value: function connExec(query) {
            var me = this;
            me.dbConn.query(query, function (err, rows, fields) {
                if (err) throw err;
                me.result = rows;
            });
        }
    }, {
        key: 'connEnd',
        value: function connEnd() {
            this.dbConn.end();
        }
    }]);

    return db_mysql;
}();