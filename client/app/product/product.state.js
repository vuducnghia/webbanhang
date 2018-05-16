(function () {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('product', {
            abstract: true,
            parent: 'app'
        })
        .state('products', {
            parent: 'product',
            url: '/products',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/product/product.html',
                    controller: 'ProductController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('product-detail', {
            parent: 'product',
            url: '/product-detail',
            views: {
                'content@': {
                    templateUrl: 'app/product/product-detail/product-detail.html',
                    controller: 'ProductDetailController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('checkout', {
            parent: 'product',
            url: '/checkout',
            views: {
                'content@': {
                    templateUrl: 'app/product/checkout/checkout.html',
                    controller: 'CheckoutController',
                    controllerAs: 'vm'
                }
            }
        })
    }
})();