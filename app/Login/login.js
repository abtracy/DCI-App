angular.module('myApp.login',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'Login/login.html',
            controller: 'LoginCtrl'
        });
    }]).
controller('LoginCtrl', function ($scope) {

});