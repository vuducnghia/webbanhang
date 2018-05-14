(function () {
    'use strict';

    angular
        .module('app')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state']
    function NavbarController($state) {
        var vm = this;
    }
})();