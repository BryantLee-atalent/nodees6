import express from 'express';
import {userInfo} from '../class/userInfo';
import {db_mysql} from '../db/dbconnect';


let router = express.Router();

// GET HTTPS
router.get('/', (req, res) => {
    const promise = new Promise((resolve, reject) => {
        let db = db_mysql('select * from user');
        resolve(db);
    });

    promise.then((value) => {
        let values = JSON.stringify(value);
        values = JSON.parse(values)
        res.send(values);
    });
});


// POST HTTPS
router.post('/', (req, res) => {
    const data = req.body;
    let query = '';
    if (data.handler === 1){//add
        query = 'insert into '
    }else if(data.handler ===2){// login
        query = 'select * from user where (user_name = '+ data.user_name +'  or user_phone=' + data.user_name+') or user_pwd = ' + data.user_pwd;
    }else if (data.handler ===3) {//update
        query = 'update user set user_name = ' + data.user_name + ', user_pwd = ' +data.user_pwd + ', user_role = ' + data.role + 'where user_id =' + data.user_id

    }else {// delete
        query = 'delete from user where user_id =' + data.user_id
    }
    const promise = new Promise((resolve, reject) => {
        let db = db_mysql('select * from user');
        resolve(db);
    });

    promise.then((value) => {
        let values = JSON.stringify(value);
        values = JSON.parse(values)
        res.send(values);
    });
    res.send(req.body);
});

module.exports = router;




