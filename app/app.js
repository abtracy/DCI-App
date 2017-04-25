'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.corps',
  'myApp.comps',
  'myApp.home',
  'myApp.login',
  'myApp.version',
  'ngMaterial'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  otherwise({redirectTo: '/home'});
}]).
controller("RootCtrl",['$scope', '$mdDialog', function($scope){
  $scope.status = '  ';
  $scope.customFullscreen = false;
  $scope.loggedIn = false;
  $scope.loggingIn = false;
  $scope.logIn = function(){
    $scope.loggedIn = true;
    };
  $scope.logOut = function(){
    $scope.loggedIn = false;
  };
}]);

