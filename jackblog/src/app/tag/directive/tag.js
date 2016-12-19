angular.module('toptag', [])
    .directive('tag', function () {
        return {
            restrict: 'EA',
            replace: 'true',
            template: '<div class="tag-con" ng-if="show" ng-click="backtotop()"><i class="fa fa-arrow-circle-up"></i></div>',
            controller: function ($scope) {
                $scope.backtotop = function () {
                    //console.log('back');
                    window.scrollTo(0,0);
                }
            }
        }
    })