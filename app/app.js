import express from 'express';
import user from './pro/user'
let app = express();

app.use('/',user);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(4321);