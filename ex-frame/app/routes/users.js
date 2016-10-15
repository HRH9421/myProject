var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/validate_email',function(req,res){
  // if(req.query.email)
  res.send('true');
})

router.get('/add',function(req,res){
  res.render('users/add');
})


module.exports = router;
