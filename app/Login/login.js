angular.module('myApp.loginModal',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'Login/loginModal.html',
            controller: 'LoginModalCtrl'
        });
    }]).
controller('LoginModalCtrl', function ($scope) {

});