function doSearch() {
    getCityCode(document.querySelector('input').value);
}

var cityCode = '';

function getCityCode(city) {
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/cityinfo',
        data: {
            cityname: city

        },
        method: 'get',
        headers: {
            apikey: '019e2a1a60bfcf8d1109c1aae43cd809'
        },
        dataType: 'json',
        success: function(res) {
            cityCode = res.retData['cityCode'];
            getDayStatus(cityCode, city)
        },
        error: function(err) {
            console.log(err);
        },
    });

}

function getDayStatus(code, city) {
    $.ajax({
        url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
        data: {
            cityname: city,
            cityid: code
        },
        method: 'get',
        headers: {
            apikey: '019e2a1a60bfcf8d1109c1aae43cd809'
        },
        dataType: 'json',
        success: function(res) {
            console.log(res);
            var arr = [];
            var keys = Object.keys(res.retData);
            forecast = res.retData['forecast'];
            old = res.retData['history'];
            today = res.retData['today'];
            arr = old.concat(today).concat(forecast);
            document.querySelector('#listBody').innerHTML = template('tbody', {
    list:arr});
        },
        error: function(err) {
            console.log(err);
        },
    })
}
