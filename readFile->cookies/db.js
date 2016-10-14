var fs = require('fs');
var db = require('mongoose');

db.connect('mongodb://localhost/book-db');

var hsitory = db.model('book',{
  id:Number,
  imgUrl: String,
  name: String,
  author: String,
  time: String,
  price_n: String,
  price_r: String,
  publisher: String,
  link:String
})

 var booksArr=[];

 booksArr = JSON.parse(fs.readFileSync('./data/history.json').toString());
 booksArr.forEach(function(item){
    var book = new hsitory(item);
    book.save(function(err){
        if(err){
          console.log(err);
        }
        console.log('保存书籍信息操作执行完毕!');
      });
 })
