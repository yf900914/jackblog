angular.module('app.routes',['ui.router']).config(function($stateProvider,$httpProvider,$urlRouterProvider){
    $httpProvider.defaults.headers.common["X-Requested-With"]='XMLHttpRequest';
    $stateProvider.state('search',{
        url:'/search',
        template:'<topic-list></topic-list>',
        controller:'listController'
    }).state('detail',{
        url:'/detail/:id',
        template:'<topic-detail></topic-detail>',
        controller:'detailController'
    });
    $urlRouterProvider.when('/', '/search')
	$urlRouterProvider.otherwise('/search') 
});
