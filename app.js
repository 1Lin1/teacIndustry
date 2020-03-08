var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '2000mb'}));
app.use(bodyParser.urlencoded({limit: '2000mb', extended: true}));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//cookie
var session = require("express-session");

var config = require('./config/config');
var RedisStore = require('connect-redis')(session);
app.use('/', session({
    name: config.session.name,
    store: new RedisStore({
        pass: config.redis.pass,
        port: config.redis.port,//端口号
        host: config.redis.host//主机
    }),//数据持久化方式，这里表示本地文件存储
    secret: config.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {path: '/', httpOnly: true, maxAge: config.session.maxAge},
}));

// app.use('/', session({
// //     name: 'sessionid',
//     secret: 'hello',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge: 60000}
// }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//同步ORM模型到数据库
require('./repository/mysql/model').syncDatabase();

module.exports = app;
