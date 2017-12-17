import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/:sta', (req, res) => {
    const str = 'select * from forms where forms_status = ' + req.params.sta;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/sta', (req, res) => {
    const data = req.body;
    const str = 'update forms set forms_status =  '+ data.forms_status +' where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/insert', (req, res) => {
    const data = req.body;
    const str = 'insert into forms(forms_name, forms_desc) values(\''+data.forms_name+'\', \''+data.forms_desc+'\')';
    console.log(str);
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/delete', (req, res) => {
    const data = req.body;
    const str = 'delete  from forms where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/update', (req, res) => {
    const data = req.body;
    const str = 'update forms set forms_name = \''+ data.forms_name +'\', forms_desc = \''+data.forms_desc+'\' where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/addTicket', (req, res) => {
    const data = req.body;
    const str = 'update forms set small_count = (small_count + 1) where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/jTicket', (req, res) => {
    const data = req.body;
    const str = 'update forms set small_count = (small_count - 1) where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/all', (req, res) => {
    const data = req.body;
    const str = 'select * from forms';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});





module.exports = router;