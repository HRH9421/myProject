var express = require('express');
var router = express.Router();

router.get('/add',function(req,res){
  res.render('admin/blogs/add');
})

module.exports = router;
