var _layer;
$.ajaxSetup({
    beforeSend: function() {
        _layer = layer.load(1, {
            shade: [0.1, '#fff']
        });
    },
    error: function(err) {
        console.log('------err--------');
        console.dir(err);
        if (err.statusText == 'timeout') {
            console.error('服务器超时');
        }
    },
    success: function(data) {
        console.log('---------data----------');
        console.dir(data);
    },
    complete: function(res) {
        console.log('---------res----------');
        console.dir(res);

        if (res.statusText == 'timeout') {
            console.error('服务器超时');
        }
      layer.close(_layer);

    }
})


var arr = [1, 2, 2, 3, 4];
console.log(arr.toString());
Array.prototype.toHRHString = function() {
    //此处的this表示当前数组的对象
    console.log(this);
    console.log(this.join('+'));
};

arr.toHRHString();
