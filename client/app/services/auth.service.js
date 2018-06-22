(function () {
    'use strict';

    angular
        .module('app')
        .factory('Auth', Auth);

    Auth.$inject = ['$rootScope', '$http'];

    function Auth($rootScope, $http) {
        var service = {
            login: login,
            logout: logout

        };

        return service;

        function login(user, callback) {

            var response;
            return $http.post('auth/local', user).then(function (res) {
                if (res != null) {
                    localStorage.setItem('id_token', res.token);
                    localStorage.setItem('id_token', res.data.token)
                    response = { success: true }
                } else {
                    response = { success: false, massage: 'Username or password is incorrect' }
                }
                callback(response)
            })
        }

        function logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('id_token');
        }

        function handleSuccess(res) {
            console.log(res.data)
            return res.data
        }
        function handleError(error) {
            return function () {
                return { success: false, massage: error }
            }
        }
        
    }
})();