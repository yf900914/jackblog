var app=angular.module('app',['ui.router','app.routes',
'app.common.factory',
'common.netService',
 'app.common.factory',
'app.topiclist.controller']);
app.run(function(netService,$rootScope){
    $rootScope.title="Jackblog"
})  