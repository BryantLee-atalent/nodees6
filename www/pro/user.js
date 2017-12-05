'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userInfo = require('../class/userInfo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res) {
    var user = new _userInfo.userInfo('bryant', 'leekobe24', '18616396821');
    res.send(user.name);
});

module.exports = router;