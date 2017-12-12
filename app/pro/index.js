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
    const imgData = data.replace(/^data:image\/\w+;base64,/, '');
    const dataBuffer = new buffer(imgData, 'base64');
    const url = 'public/images/index'+ new Date().getTime() +'.png';
    //写入文件
    fs.writeFile(url , dataBuffer, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('保存成功');
        }
    });
    const str = 'update index_image set image_handler = 0';
    db_mysql(str).then((value)=> {
        const addStr = 'insert into index_image (image_src, image_handler) values( \' '+  url +'\', 1)';
        db_mysql(addStr).then((value2)=> {
            res.send(value2);
        });
    });
});

module.exports = router;