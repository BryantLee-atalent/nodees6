import express from 'express';
import fs from 'fs';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/', (req, res) => {
    const str = 'select * from mechanism';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/search', (req, res) => {
    const str = 'select * from mechanism where mechanism_name like  \'%' + req.body.searchString + '%\'';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/delete', (req, res) => {
    const str = 'delete  from mechanism where mechanism_id = ' + req.body.mechanism;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/insert', (req, res) => {
    const data = req.body;
    const str = 'insert into mechanism(mechanism_name, mechanism_src, mechanism_desc) values (\'' + data.mechanism_name + '\',\'' +data.mechanism_src +'\',\'' + data.mechanism_desc+ '\')';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/update', (req, res) => {
    const data = req.body;
    //过滤data:URL
    var base64Data = data.mechanism_src.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile(Date.now()+".png", dataBuffer, function(err) {
        if(err){
            res.send(err);
        }else{
            const str = 'update mechanism set mechanism_name = \''+ data.mechanism_name +'\', mechanism_src = \''+dataBuffer+'\', mechanism_desc = \''+data.mechanism_desc+'\' where mechanism_id = ' + data.mechanism_id;
            db_mysql(str).then((value)=> {
                res.send(value);
            });
        }
    });

});

module.exports = router;