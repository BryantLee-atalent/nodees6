import express from 'express';
import buffer from 'buffer';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// 封面图
router.post('/banner', (req, res) => {
    const str = 'select * from index_image where image_handler = 1';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// 分榜单下拉框
router.post('/small_1', (req, res) => {
    const str = 'select small_id, small_name from small';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// 封面 top3 大榜单
router.post('/forms_big', (req, res) => {
    const str = 'select *  from forms where forms_status = 1 order by forms_id desc limit 1 \n';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// 封面 根据大榜单 查询分榜单
router.post('/forms_small', (req, res) => {
    const data = req.body;
    const str = 'select *  from small where forms_id = '+data.forms_id+' order by small_id desc limit 3 \n';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// 根据分榜单查询机构
router.post('/forms_small', (req, res) => {
    const data = req.body;
    const str = 'select *  from mechanism where small_id = '+data.small_id+' order by mechanism_ticket desc limit 3 \n';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});


// https post
router.post('/mechanism_apply', (req, res) => {
    const data = req.body;
    const str = 'insert into mechanism(mechanism_name, mechanism_src, mechanism_desc,mechanism_phone,mechanism_date) values (\'' + data.mechanism_name + '\',\'' +data.mechanism_src +'\',\'' + data.mechanism_desc+ '\', \''+data.mechanism_phone+'\', \''+data.mechanism_date+'\')';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/forms', (req, res) => {
    const data = req.body;
    const str = 'select * from forms where forms_id = ' + data.forms_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/small_mechanism', (req, res) => {
    const data = req.body;
    const str = 'select * from mechanism where small_id = ' + data.small_id + 'order by mechanism_ticket desc';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/mechanism', (req, res) => {
    const data = req.body;
    const str = 'select * from mechanism where mechanism_id = ' + data.mechanism_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

router.post('/ticket', (req, res) => {
    const data = req.body;
    const str = 'update  mechanism set mechanism_ticket = '+data.mechanism_ticket+'where mechanism_id = ' + data.mechanism_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

module.exports = router;