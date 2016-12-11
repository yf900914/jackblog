angular.module('app.topicdetail.controler',['app.topicdetail.directive.topicdetail'])
.controller('detailController',function($scope, $stateParams, netService){
     $scope.id=$stateParams.id;
      netService.getTopic('get',{
          id:$scope.id
    }).success(function(body){
        var data;
        if (body.success!==true){
            console.error("netService.addTask",body);
        }
        data=body.data;
        console.log(data);
    })

})