angular.module('app.topiclist.controller',['app.topiclist.directive.topiclist'])
.controller('listController',function($scope,netService){
    netService.searchTopic('get',{
        limit:10
    }).success(function(body){
        var data;
        if(body.success!==true){
            console.error("netService.addTask",body);
        }
        data = body.data;
        console.log(data);
        return $scope.topiclist = data;
    });
})