var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('./public'))

var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', './views');


const common = require('./common');
const bookTypes = common.bookTypes;

app.get('/', (req, res) => {
    res.redirect('/types');
})
app.get('/types', (req, res) => {
    res.render('types', {
        types: bookTypes
    });
})

app.get('/list/:id', (req, res) => {
    var data = [];
    try {
        data = JSON.parse(fs.readFileSync(`./data/book_${req.params.id}.json`).toString());

    } catch (e) {
        console.log(e);
    } finally {

        var bookType = bookTypes.find((item) => {
            return item.id == req.params.id
        });
        res.render('list', {
            data: data,
            title: bookType.name
        })

    }
})



app.listen(4000, function() {
    console.log('服务器运行于4000端口');
})
