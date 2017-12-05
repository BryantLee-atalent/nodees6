import express from 'express';
import {userInfo} from '../class/userInfo';

let router = express.Router();
    router.get('/', (req, res) => {
        let user = new userInfo('bryant', 'leekobe24', '18616396821')
        res.send(user.name);
    });


module.exports = router;




