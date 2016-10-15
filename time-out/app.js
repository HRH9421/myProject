var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/api/data',(req,res)=>{
  setTimeout(function(){
    res.json({
      status:'y',
      msg:'数据获取成功',
      data:{}
    })
  },5000)
})


app.listen(3000,function(){
  console.log('服务器运行于3000端口');
})
