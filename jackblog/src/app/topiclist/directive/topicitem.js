angular.module('app.topiclist.directive.topicitem',['app.topiclist.directive.topic']).directive('topicItem',function(){
    return {
        restrict:'EA',
        template:'<section class="topicitem"><topic-item></topic-item></section>'
    }
})