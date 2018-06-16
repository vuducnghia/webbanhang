(function () {
    var app = angular.module('app')
    app.directive('sessionDirective', function sessionDirective() {
        return {
            templateUrl: '/app/directive/session/session.template.html'
        }
    })
})();