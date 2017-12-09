import express from 'express';

import user from './pro/user';
import mechanism from './pro/mechanism';
import form from './pro/form';
import index from './pro/index';
import smallform from './pro/smallform';
import signup from './pro/signup';
import selection from './pro/selection';

import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
let app = express();

app.use(logger('dev'));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser());
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use('/user',user);
app.use('/index',index);
app.use('/mechanism',mechanism);
app.use('/form',form);
app.use('/smallform',smallform);
app.use('/signup',signup);
app.use('/selection',selection);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000);