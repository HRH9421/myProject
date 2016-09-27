var Crawler = require("crawler");
var url = require('url');
var fs = require('fs');


var c = new Crawler({
    maxConnections: 10,
    callback: function(error, result, $) {

        var arr = [];

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
        fs.writeFile('data.json', JSON.stringify(arr), function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('爬取数据成功!');
            }
        })
    }
});

c.queue('http://hao.jobbole.com/latest/');
