angular.module('app.topiclist.directive.topiclist',['pagenav','app.topiclist.directive.topicitem','toptag'])
.directive('topicList',function(){
    return{
        restrict:'EA',
        template:'<div class="header"><nav></nav></div><div class="topiclist"><topic item="item" ng-repeat="item in topiclist"></topic>'+
        '<div class="load-more" ng-if="isshow"><p class="load-btn" ng-click=loadmore(isshow)><span class="load">点击查看更多</span></p></div></div>'+
        '<div class="footer"><tag></tag></div>'
    }
})