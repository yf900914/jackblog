angular.module('app.topicdetail.controller',['app.topicdetail.directive.topicdetail'])
.controller('detailController',function($scope, $stateParams, netService){
     $scope.id=$stateParams.id;
     //console.log($scope.id);
      netService.getTopic('get', $scope.id).success(function(body){
        var data;
        if (body.success!==true){
            console.error("netService.addTask",body);
        }
        data=body.data;
        console.log(data);
        var time=data.create_at;
        var time1=+new Date(time);
        var  time2=+new Date();
        var distime=time2-time1;
        var distime=distime/1000/3600/24;
         if (Math.floor(distime/365)>0){
             data.create_at=Math.floor(distime/365)+'年前';
         }else if(Math.floor(distime/30)>0){
            data.create_at=Math.floor(distime/30)+'个月前'
         }else if(Math.floor(distime)>0){
             data.create_at=Math.floor(distime)+'天前';
        }else if(Math.floor(distime*24)>0){
            data.create_at=Math.floor(distime*24)+'个小时前';
        }else if(Math.floor(distime*24*60)>0){
            data.create_at=Math.floor(distime*24*60)+'分钟前'
        }else {
            data.create_at='刚刚';
        }
        if(data.tab=="share"){
            data.tab="分享";
        }else if(data.tab=="ask"){
            data.tab="问答";
        }else{
            data.tab="招聘";
        }
         return $scope.topicdetail = data;    
    });
})
.filter('htmlContent',['$sce', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input);
	}
}]);
