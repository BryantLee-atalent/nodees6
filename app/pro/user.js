import express from 'express';
import {userInfo} from '../class/userInfo';
import {db_mysql} from '../db/dbconnect';

let router = express.Router();
    router.get('/', (req, res) => {
        let db = new db_mysql();
        db.connStart();
        db.connExec('select * from user', function ($scope) {
            db.connEnd();
            let user = db.result;
            res.send(user);
        });
    });


module.exports = router;




