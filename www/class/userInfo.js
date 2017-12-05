"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userInfo = exports.userInfo = function userInfo(name, phone, pwd) {
    _classCallCheck(this, userInfo);

    this.name = name;
    this.phone = phone;
    this.pwd = pwd;
};