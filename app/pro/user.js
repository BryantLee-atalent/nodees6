import express from 'express';
import {userInfo} from '../class/userInfo';
import {db_mysql} from '../db/dbconnect';


let router = express.Router();
    router.get('/', (req, res) => {
        const promise = new Promise((resolve, reject)=> {
            let db = db_mysql('select * from user');
            resolve(db);
        });

        promise.then((value)=> {
            let values = JSON.stringify(value);
            values = JSON.parse(values)
            res.send(values[0].user_pwd);
        });
    });

    router.post('/', (req, res)=> {
        res.send(req.body);
    });

module.exports = router;




