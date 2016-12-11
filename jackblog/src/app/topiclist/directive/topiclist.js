angular.module('app.topiclist.directive.topiclist',['app.topiclist.directive.topicitem'])
.directive('topicList',function(){
    return{
        restric:'EA',
        template:'<div class="topiclist"><topic item="item" ng-repeat="item in topiclist"></topic></div>'
    }
})