angular.module('app.topiclist.directive.topiclist',['pagenav','app.topiclist.directive.topicitem'])
.directive('topicList',function(){
    return{
        restrict:'EA',
        template:'<div class="header"><nav></nav></div><div class="topiclist"><topic item="item" ng-repeat="item in topiclist"></topic>'+
        '<div class="load-more"><p class="load-btn" ng-click=loadmore()><span class="load">点击查看更多</span></p></div></div>'
    }
})