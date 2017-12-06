import express from 'express';
import {userInfo} from '../class/userInfo';
import {db_mysql} from '../db/dbconnect';

let router = express.Router();
    router.get('/', (req, res) => {
        let db = new db_mysql('select * from user');

        res.send(JSON.parse(db).name);
    });


module.exports = router;




