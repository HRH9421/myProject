var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.static('./public'));

var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', './views');

app.get('/tpl',(req,res)=>{
  res.render('tpl');
})


app.get('/tpl-2',(req,res)=>{
  res.render('tpl2',{
    list:[
      {name:"Tom"},
      {name:"Jerry"}
    ]})
})

app.listen(3000,()=>{
  console.log('服务器运行于3000端口');
})
