import express from 'express';
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
    let query2 = '';
    if (data.handler === 1){//add
        query = 'insert into  user (user_name, user_pwd, user_phone, user_role) values ( \'' + data.user_name + '\', \'123456\', \''+ data.user_phone +'\',1)'
    }else if(data.handler ===2){// login
        query = 'select * from user where user_phone = \'' + data.user_name +'\' and user_pwd = \'' + data.user_pwd + '\'';
        query2 = 'update user set login_time = NOW() where user_id = '
    }else if (data.handler ===3) {//update
        query = 'update user set user_name = \'' + data.user_name + '\' where user_id =' + data.user_id;
    }else if (data.handler ===4) {// search
        if (data.user_name === '') {
            query = 'select * from user';
        }else {
            query = 'select * from user where user_name like \'%'+ data.user_name +'%\' or user_phone like \'%'+data.user_name+'%\'';
        }

    }else if (data.handler === 5){//pwd
        query = 'update user set user_pwd = \'123456\' where user_id = ' + data.user_id;
    }else {// delete
        query = 'delete from user where user_id =' + data.user_id
    }
    const promise = new Promise((resolve, reject) => {
        let db = db_mysql(query);
        resolve(db);
    });

    promise.then((value) => {
        if (query2) {
            const promise2 = new Promise((resolve, reject) => {
                // str += 'select count(1) from user'
                const str = query2 + value[0].user_id;
                console.log(value);
                let dbc = db_mysql(str);

                resolve(dbc);
            });
            promise2.then((value2)=>{
                let values = JSON.stringify(value);
                values = JSON.parse(values);
                res.send(values);
            });
        }else {
            let values = JSON.stringify(value);
            values = JSON.parse(values);
            res.send(values);
        }
    });
});

module.exports = router;




