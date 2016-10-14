var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

//主界面
function getLogineUserName(req){
  var userName = '';
  if(req.cookies.userName){
    userName =req.cookies.userName;
  }
  return userName;
}

app.get('/index',(req,res)=>{
  ///crypto模块用于数据加密
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
var pwd = '123';
pwd = md5.update(pwd).digest('hex').toString();
console.log(pwd);
var userName = getLogineUserName(req);
  res.render('index',{userName:userName})
})

//登录界面
app.get('/login',(req,res)=>{

  res.render('login')
})

//用户界面
app.get('/user',(req,res)=>{

  if(req.cookies.userName){
      res.render('users',{userName:req.cookies.userName});
  }else{
    res.redirect('/login');
  }

})

//登录
app.post('/login',(req,res)=>{
 res.cookie('userName',req.body.userName,{path:'/'});
 res.redirect('/user')
})

//登出
app.post('/logout',(req,res)=>{
  res.clearCookie('userName',{path:'/'});
  res.redirect('index');
})




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});







app.listen(3000,function(){
  console.log('服务器运行于3000端口');
})

// module.exports = app;
