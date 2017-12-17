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
router.post('/', (req, res) => {
    const data = req.body.imageData;
    const str = 'update index_image set image_handler = 0';
    db_mysql(str).then((value)=> {
        const addStr = 'insert into index_image (image_src, image_handler) values( \' '+  data +'\', 1)';
        db_mysql(addStr).then((value2)=> {
            res.send(value2);
        });
    });
});


router.post('/delete', (req, res) => {
    const data = req.body;
    const str = 'delete  small forms where small_id = ' + data.small_id;
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

module.exports = router;