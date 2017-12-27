import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/:sta', (req, res) => {
    const str = 'select * from small where small_status = ' + req.params.sta;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/sta', (req, res) => {
    const data = req.body;
    const str = 'update small set small_status =  '+ data.small_status +' where small_id = ' + data.small_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/update', (req, res) => {
    const data = req.body;
    const str = 'update small set small_icon = \''+data.small_icon+'\', small_banner = \''+data.small_banner+'\', small_desc = \''+data.small_desc+'\', small_url= \''+data.small_url+'\',\''+data.small_name+'\',mechanism_ids = \''+data.mechanism_ids+'\', small_endtime = \''+data.small_endtime+'\', small_datetime = \''+data.small_datetime+'\' where small_id = '+data.small_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});


router.post('/delete', (req, res) => {
    const data = req.body;
    const str = 'delete  small forms where small_id = ' + data.small_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});


router.post('/insert', (req, res) => {
    const data = req.body;
    const str = 'insert into small(small_icon,small_banner,small_desc,small_url,small_name,mechanism_ids, small_datetime, small_endtime) values(\''+data.small_icon+'\',\''+data.small_banner+'\', \''+data.small_desc+'\',\''+data.small_url+'\',\''+data.small_name+'\',\''+data.mechanism_ids+'\', \''+data.small_datetime+'\',  \''+data.small_endtime+'\')'
    console.log(str);
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/vote', (req, res) => {
    const data = req.body;
    const str = 'update small set small_vote = '+ data.small_vote +'where small_id = '+data.small_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});


module.exports = router;