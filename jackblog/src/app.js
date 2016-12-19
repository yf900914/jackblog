var app=angular.module('app',['ui.router','app.routes',
'app.common.factory',
'common.netService',
 'app.common.factory',
'app.topiclist.controller',
'app.topicdetail.controller',
'app.nav.controller',
'app.tag.controller']);
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            //console.log(this.innerHeight);
            var height=this.innerHeight*0.2;
             if (this.pageYOffset >= height) {
                 scope.show = true;
                // console.log('Scrolled below header.');
              } else {
                 scope.show = false;
                 //console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
app.run(function(netService,$rootScope){
    $rootScope.title="Jackblog";
    calWinsize(document,window);
})  