angular.module('app.topicdetail.controller',['app.topicdetail.directive.topicdetail'])
.controller('detailController',function($scope, $stateParams, netService){
     $scope.id=$stateParams.id;
     console.log($scope.id);
      netService.getTopic('get', $scope.id).success(function(body){
        var data;
        if (body.success!==true){
            console.error("netService.addTask",body);
        }
        data=body.data;
        console.log(data);
         return $scope.topicdetail = data;
    });
})
.filter('htmlContent',['$sce', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input);
	}
}]);