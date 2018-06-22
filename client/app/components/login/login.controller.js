(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', '$scope', 'Auth']
    function LoginController($state, $scope, Auth) {
        var vm = this;
        vm.user = null;
        vm.error =''
        vm.login = function () {
            Auth.login(vm.user, function (res) {
                if (res.success){

                }else{
                    vm.error = res.massage
                }         
            }).catch((err)=>{
                console.log(err.data.message)
                vm.error = err.data.message
            })
        }
    }
})();