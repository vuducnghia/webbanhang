(function () {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider',];

    function stateConfig($stateProvider, $stateParams) {
        $stateProvider.state('product', {
            abstract: true,
            parent: 'app'
        })
            .state('products', {
                parent: 'product',
                url: '/products/:category/:subcategory',
                data: {
                    authorities: []
                },
                resolve: {
                    productsData: function (productService, $stateParams) {
                        debugger;
                        let category = $stateParams.category;
                        let subcategory = $stateParams.subcategory;
                        return productService.getProductsByCategory(category, subcategory);
                    }
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
                parent: 'products',
                url: '/product-detail/:id',
                resolve: {
                    productData: function (productService, $stateParams) {
                        let productId = $stateParams.id;
                        return productService.getProductById(productId);
                    }
                },
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