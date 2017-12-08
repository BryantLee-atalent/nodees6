import express from 'express';
import {userInfo} from '../class/userInfo';
import {db_mysql} from '../db/dbconnect';


let router = express.Router();

// GET HTTPS
router.get('/:page', (req, res) => {
    const promise = new Promise((resolve, reject) => {
        const page = req.params.page;
        var str = 'SELECT * FROM user limit 20 offset ' + 20 * (page - 1);

        let db = db_mysql(str);
        resolve(db);
    });

    promise.then((value) => {
        const promise2 = new Promise((resolve, reject) => {
            // str += 'select count(1) from user'
            const str = 'select count(1) as count from user';
            let dbc = db_mysql(str);

            resolve(dbc);
        });
        promise2.then((values)=>{
            res.send({data: value, count: values[0].count});
        });
    });
});


// POST HTTPS
router.post('/', (req, res) => {
    const data = req.body;
    let query = '';
    if (data.handler === 1){//add
        query = 'insert into '
    }else if(data.handler ===2){// login
        query = 'select * from user where user_phone = \'' + data.user_name +'\' and user_pwd = \'' + data.user_pwd + '\'';
    }else if (data.handler ===3) {//update
        query = 'update user set user_name = ' + data.user_name + ', user_pwd = ' +data.user_pwd + ', user_role = ' + data.role + 'where user_id =' + data.user_id

    }else {// delete
        query = 'delete from user where user_id =' + data.user_id
    }
    const promise = new Promise((resolve, reject) => {
        let db = db_mysql(query);
        resolve(db);
    });

    promise.then((value) => {
        let values = JSON.stringify(value);
        values = JSON.parse(values);
        res.send(values);
    });
});

module.exports = router;




