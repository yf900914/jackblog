angular.module('app.routes',['ui.router']).config(function($stateProvider,$httpProvider){
    $httpProvider.defaults.headers.common["X-Requested-With"]='XMLHttpRequest';
    return $stateProvider.state('search',{
        url:'/search',
        template:'<topic-list></topic-list>',
        controller:'listController'
    }).state('detail',{
        url:'/detail/:id',
        template:'<topic-detail></topic-detail>',
        contoller:'detailController'
    });
});
