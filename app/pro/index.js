import express from 'express';
import fs from 'fs';
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

    // var base64Data = data.replace(/^data:image\/\w+;base64,/, "");
    // var dataBuffer = new Buffer(base64Data, 'base64');
    // const url = 'app/static/images/'+Date.now()+"image.png";
    // fs.writeFile(url, dataBuffer, function(err) {
    //     if(err){
    //         res.send(err);
    //     }else{
    //
    //     }
    // });

});

module.exports = router;