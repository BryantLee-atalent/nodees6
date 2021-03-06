'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _dbconnect = require('../db/dbconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// https get
router.get('/', function (req, res) {
    var str = 'select * from index_image where image_handler = 1';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        res.send(value);
    });
});

// https post
router.post('/', function (req, res) {
    var data = req.body.imageData;
    var str = 'update index_image set image_handler = 0';
    (0, _dbconnect.db_mysql)(str).then(function (value) {
        var addStr = 'insert into index_image (image_src, image_handler) values( \'' + data + '\', 1)';
        (0, _dbconnect.db_mysql)(addStr).then(function (value2) {
            res.send(value2);
        });
    });

    // var base64Data = data.replace(/^data:image\/\w+;base64,/, "");
    // var dataBuffer = new Buffer(base64Data, 'base64');
    // const url = 'app/static/images/'+Date.now()+"image.png";
    // fs.writeFile(url, dataBuffer, function(err) {
    //     if(err){
    //         res.send(err);
    //     }else{
    //
    //     }
    // });
});

module.exports = router;