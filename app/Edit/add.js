angular.module('myApp.add',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add', {
            templateUrl: 'Edit/add.html',
            controller: 'AddCtrl'
        });
    }]).
controller('AddCtrl', function ($scope) {

});