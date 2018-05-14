(function () {
    'use strict';

    angular.module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider']

    function stateConfig($stateProvider) {
        // $urlRouterProvider.otherwise('/app');  // moi duong dan k hop le
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    template: 'public/layouts/navbar/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                }
                // ,
                // 'footter':{
                //     templateUrl:'layouts/'
                // }
            }
        })
    }
})();