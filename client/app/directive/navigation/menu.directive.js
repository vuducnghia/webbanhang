(function () {
    var app = angular.module('app')
    app.directive('menuDirective', function menuDirective() {
        return {
            restrict: 'E',
            templateUrl: '/app/directive/navigation/menu.template.html',
            controller: ['$scope', function menuController($scope) {
                $scope.viewSide = false;
                $scope.openList = function () {
                    $scope.viewSide = !$scope.viewSide;
                }
            }]
        };
    })
})();