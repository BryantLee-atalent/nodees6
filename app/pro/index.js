import express from 'express';
import buffer from 'buffer';
import {db_mysql} from '../db/dbconnect';
let router = express.Router();

// https get
router.get('/', (req, res) => {
    const str = 'select * from index_image where image_handler = 1';
    db_mysql(str).then((value)=> {
        res.send(value);
    });
});

// https post
router.post('/', (req, res) => {
    const data = req.body.imageData;

    const str = 'update index_image set image_handler = 0';
    db_mysql(str).then((value)=> {
        const addStr = 'insert into index_image (image_src, image_handler) values( \''+  data +'\', 1)';
        db_mysql(addStr).then((value2)=> {
            res.send(value2);
        });
    });
});

module.exports = router;