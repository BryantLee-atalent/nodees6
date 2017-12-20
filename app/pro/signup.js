import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/:sta', (req, res) => {
    let str = ''
    if (req.params.sta == 0) {
        str = 'select * from mechanism where mechanism_status = '+req.params.sta;
    }else {
        str = 'select * from mechanism where mechanism_status != '+req.params.sta;
    }
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/status', (req, res) => {
    const data = req.body;
    const str = 'update signup set mechanism_status = '+ data.status +', mechanism_reson = \''+data.reson+'\'';
    db_mysql(str).then((value)=> {
        res.send(value)
    });
});

module.exports = router;