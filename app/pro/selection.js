import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/:sta', (req, res) => {
    const str = 'select * from mechanism where mechanism = '+req.params.sta;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/status', (req, res) => {
    const data = req.body;
    const str = 'update mechanism set mechanism_status = '+ data.status +', mechanism_reson = \''+data.reson+'\'';
    db_mysql(str).then((value)=> {
        res.send(value)
    });
});

module.exports = router;