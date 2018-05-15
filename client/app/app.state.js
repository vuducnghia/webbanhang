(function () {
    'use strict';

    angular.module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$locationProvider']

    function stateConfig($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        // $urlRouterProvider.otherwise('/app');  // moi duong dan k hop le
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: '/app/layouts/navbar/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: '/app/layouts/footer/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})();