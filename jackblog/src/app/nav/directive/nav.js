 angular.module('pagenav',[])
 .directive('nav',function(){ 
     return {
         restrict:'EA',
         replace:'true',
         template:'<div class="page-top">'+
         '<ul class="nav-con">'+
         '<li class="nav">全部</li>'+
         '<li class="nav">精华</li>'+
         '<li class="nav">分享</li>'+
         '<li class="nav">问答</li>'+
         '<li class="nav">招聘</li></ul></div>'
     }
 })