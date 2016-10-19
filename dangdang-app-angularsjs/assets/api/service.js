//创建一个公用的数据管理仓库
/**
 * 根据分类信息取数据
 * @type {Object}
 */
app.factory('commonService', ['$http', function($http) {
    var service = {};
    service.getData = function(type, callBack) {
        $http({
                url: '/dangdang-app-angularsjs/data/book_' + type + '.json',
                method: 'get'
            })
            .then(function(res) {
                console.dir(red)
                callBack(res)
            }, function(err) {
                console.dir(err)
            })
    }
    return service;
}])
