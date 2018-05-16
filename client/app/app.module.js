(function () {
    "use strict";
    angular.module('app', [
        'ngStorage',
        'ui.router'])
        .run(run);

    run.$inject = ['$http', '$rootScope', '$localStorage', '$state']
    function run($http, $rootScope, $localStorage, $state){
    }
})();