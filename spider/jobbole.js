var Crawler = require("crawler");
var url = require('url');
var fs = require('fs');

fs.writeFileSync('./jobbole.json','');


var c = new Crawler({
    maxConnections: 10,
    callback: function(error, result, $) {

        var arr = [];
   var strData = fs.readFileSync('./jobbole.json');
   if(strData!="")
  {
    arr = JSON.parse(strData);
  }
        $('.res-item').each(function(index, li) {
            var obj = {};
            var imgUrl = $($(li).find('span img')[0]).attr('src').trim();
            var title = $($(li).find('h3 a')[0]).text()
              var author =  $($(li).find('.p-meta span')[0]).text().slice(0,-2);
             var support = $($(li).find('.p-meta span')[1]).text();
            var descriptin =  $($(li).find('p')[0]).text().slice(0,-6);
            var detail =  $($(li).find('p .more-link')[0]).text();
            obj.imgUrl = imgUrl;
            obj.title = title;
            obj.author = author;
            obj.support = support;
            obj.descriptin = descriptin;
            obj.detail = detail;
            arr.push(obj);


        })

        console.log('总记录数为:'+arr.length);
      fs.writeFileSync('./jobbole.json',JSON.stringify(arr));
    }
});

var arrUrls = [];
for(var i=1;i<10;i++){
  if(i==1){
    arrUrls.push('http://hao.jobbole.com/latest/');
  }
  else{
    arrUrls.push('http://hao.jobbole.com/latest/page/'+i+'/');
  }
}

c.queue(arrUrls);
