import express from 'express';

let router = express.Router();

// https get
router.get('/', (req, res) => {
    res.send('adasd')
});



module.exports = router;