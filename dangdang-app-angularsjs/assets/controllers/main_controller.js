app.controller('mainController',['$scope','commonService',function($scope,c_service){
  // c_service.getData('ertong',function(res){
  //   console.dir(res)
  // })
  $scope.selectIndex = 0;
  $scope.linkTo = function(index){
    $scope.selectIndex = index;
  }}]
)
