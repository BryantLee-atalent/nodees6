'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./pro/user');

var _user2 = _interopRequireDefault(_user);

var _mechanism = require('./pro/mechanism');

var _mechanism2 = _interopRequireDefault(_mechanism);

var _form = require('./pro/form');

var _form2 = _interopRequireDefault(_form);

var _index = require('./pro/index');

var _index2 = _interopRequireDefault(_index);

var _smallform = require('./pro/smallform');

var _smallform2 = _interopRequireDefault(_smallform);

var _signup = require('./pro/signup');

var _signup2 = _interopRequireDefault(_signup);

var _selection = require('./pro/selection');

var _selection2 = _interopRequireDefault(_selection);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.raw());
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: false }));
app.use((0, _cookieParser2.default)());
// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});

app.use('/user', _user2.default);
app.use('/index', _index2.default);
app.use('/mechanism', _mechanism2.default);
app.use('/form', _form2.default);
app.use('/smallform', _smallform2.default);
app.use('/signup', _signup2.default);
app.use('/selection', _selection2.default);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000);