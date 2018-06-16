(function () {
    var app = angular.module('app');
    app.service('productService', function ($http, $interval, $q, $timeout) {
        return {
            getProductsByCategory: function (category, subcategory) {
                debugger;
                return $timeout(function () {
                    return "quang vinh";
                }, 2000);
            },
            getProductById: function (productId) {
                return $timeout(function () {
                    return "vinh";
                }, 2000)
            }

        }
    })
})();