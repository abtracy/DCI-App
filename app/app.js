'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.corps',
  'myApp.comps',
  'myApp.home',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  otherwise({redirectTo: '/home'});
}]).
controller("RootCtrl",['$scope',function($scope){
  $scope.loggedIn = false;
  $scope.logIn = function(){
    $scope.loggedIn = true;
  }
  $scope.logOut = function(){
    $scope.loggedIn = false;
  }
}]);

