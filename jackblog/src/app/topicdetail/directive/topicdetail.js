angular.module('app.topicdetail.directive.topicdetail',[]).directive('topicDetail',function(){
    return{
        restrict:'EA',
        template:'<div class="topicdetail-con" ng-model="topicdetail"><div class="topic-content" ng-bind-html="topicdetail.content|htmlContent "></div></div>'
    }
})