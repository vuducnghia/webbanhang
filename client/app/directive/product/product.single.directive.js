(function () {
    angular.module('app')
        .directive('productsingleDirective', function () {
            return {
                templateUrl: '/app/directive/product/product.single.template.html'
            }
        })
})();