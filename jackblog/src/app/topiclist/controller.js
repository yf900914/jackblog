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
        //console.log(data.length);
        var len=data.length;
        for (i=0;i<len;i++){
            var time=data[i].create_at;
            var time1=+new Date(time);
            var  time2=+new Date();
            var distime=time2-time1;
            var distime=distime/1000/3600/24;
            if (Math.floor(distime/365)>0){
                data[i].create_at=Math.floor(distime/365)+'年前';
            }else if(Math.floor(distime/30)>0){
                data[i].create_at=Math.floor(distime/30)+'个月前'
            }else if(Math.floor(distime)>0){
                data[i].create_at=Math.floor(distime)+'天前';
            }else if(Math.floor(distime*24)>0){
                data[i].create_at=Math.floor(distime*24)+'个小时前';
            }else if(Math.floor(distime*24*60)>0){
                data[i].create_at=Math.floor(distime*24*60)+'分钟前'
            }else {
                data[i].create_at='刚刚';
            }
        }
        return $scope.topiclist = data;
    });
    $scope.isshow=true;
    $scope.loadmore=function (isshow){
        $scope.isshow=false;
        netService.searchTopic('get',{
            limit:20
        }).success(function(body){
            var data;
            if (body.success!==true){
                console.error("netService.addTask",body);
            }
            data=body.data;
            console.log(data);
             var len=data.length;
        for (i=0;i<len;i++){
            var time=data[i].create_at;
            var time1=+new Date(time);
            var  time2=+new Date();
            var distime=time2-time1;
            var distime=distime/1000/3600/24;
            if (Math.floor(distime/365)>0){
                data[i].create_at=Math.floor(distime/365)+'年前';
            }else if(Math.floor(distime/30)>0){
                data[i].create_at=Math.floor(distime/30)+'个月前'
            }else if(Math.floor(distime)>0){
                data[i].create_at=Math.floor(distime)+'天前';
            }else if(Math.floor(distime*24)>0){
                data[i].create_at=Math.floor(distime*24)+'个小时前';
            }else if(Math.floor(distime*24*60)>0){
                data[i].create_at=Math.floor(distime*24*60)+'分钟前'
            }else {
                data[i].create_at='刚刚';
            }
        }
            return $scope.topiclist=data;
       }); 
    }
    var getTime=function(){
        var date = new Date();
        var year= date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDay();
        var hour=date.getHours();
    }
})