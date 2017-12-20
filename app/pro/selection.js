import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('', (req, res) => {
    const str = '\n' +
        'select a.mechanism_id,a.mechanism_name,a.mechanism_status,a.mechanism_reson,a.mechanism_ticket,b.small_url,b.small_endtime ,b.small_id,b.small_icon,c.forms_name,c.forms_desc from mechanism as a inner join small as b on a.small_id = b.small_id inner join forms as c on b.forms_id = c.forms_id';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/vote', (req, res) => {
    const data = req.body;
    const str = 'update mechanism set mechanism_status = '+ data.status +', mechanism_reson = \''+data.reson+'\'';
    db_mysql(str).then((value)=> {
        res.send(value)
    });
});

module.exports = router;