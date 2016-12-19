angular.module('app.topicdetail.directive.topicdetail',[,'toptag' ]).directive('topicDetail',function(){
    return{
        restrict:'EA',
        template:'<div class="page-con"  ng-model="topicdetail">'+
        '<div class="pageheader"><span class="topic-title">{{topicdetail.title}}</span>'+
        '<div class="topicinfo"><span class="release_time">发布于{{topicdetail.create_at}}</span>'+
        '<span class="author">作者{{topicdetail.author.loginname}}</span>'+
        '<span class="visisted">{{topicdetail.visit_count}}次浏览</span><span class="topic-class">来自{{topicdetail.tab}}</span>'+
        '</div></div>'+
        '<div class="topicdetail-con"><div class="topic-content" ng-bind-html="topicdetail.content|htmlContent "></div></div>'+
        '<div class="comment-con"><div class="comment-header"><span class="reply_count">{{topicdetail.reply_count}}条回复</span></div>'+
        '<div class="comment-info" info="info" ng-repeat="info in topicdetail.replies">'+
        '<div class="user-info"><a class="avatar"><img src="{{info.author.avatar_url}}"></a><a class="user-name">{{info.author.loginname}}</a></div>'+
        '<div class="comment_content" ng-bind-html="info.content|htmlContent"></div>'+
        '</div></div><div class="footer"><tag></tag></div>'+
        '</div>'
    }
})