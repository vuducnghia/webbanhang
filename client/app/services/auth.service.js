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
            return $http.post('auth/local', user).then(function (user) {
                if (user != null) {
                    localStorage.setItem('id_token', user.data.token)
                    response = { success: true }
                } else {
                    response = { success: false, massage: 'Username or password is incorrect' }
                }
                callback(response)
            })
        }

        function logout() {

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
        // function activateAccount (key, callback) {
        //     var cb = callback || angular.noop;

        //     return Activate.get(key,
        //         function (response) {
        //             return cb(response);
        //         },
        //         function (err) {
        //             return cb(err);
        //         }.bind(this)).$promise;
        // }

        //function private
    }
})();