angular.module('app.topiclist.directive.topic',[]).directive('topic',function(){
    return {
        restric:'EA',
        template:'<div class="topic-con">'+
        '<p class="list-top"><span class="creattime">{{item.create_at}}</span></p>'+
        '<h4 class="title"><a ui-sref="detail({id:item.id})" class="link-title">{{item.title}}</a></h4>'+
        '<div class="list-footer"><span>阅读 {{item.visit_count}}</span><span>评论 {{item.reply_count}}</span></div>'+
        '</div>'
    }
})