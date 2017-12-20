import express from 'express';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('', (req, res) => {
    const str = '\n' +
        'select a.mechanism_id,a.mechanism_name,a.mechanism_status,a.mechanism_reson,a.mechanism_ticket,b.small_url,b.small_endtime ,b.small_id,b.small_icon,c.forms_name,c.forms_desc,b.small_name, b.small_banner, a.mechanism_src, a.mechanism_desc from mechanism as a inner join small as b on a.small_id = b.small_id inner join forms as c on b.forms_id = c.forms_id order by a.mechanism_ticket desc';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('', (req, res) => {
    const data = req.body;
    const str = 'update mechanism set mechanism_ticket = '+ data.ticket +' where mechanism_id ='+data.mechanism_id;
    db_mysql(str).then((value)=> {
        res.send(value)
    });
});

module.exports = router;