'use strict';

// a helper function to avoid typing the full API address constantly
var projectApi = function(path) {
  return 'http://plato.cs.virginia.edu/~hab9sr/dci-backend/' + path;
  // return 'http://localhost:80/dci-backend/' + path;
}

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.corps',
  'myApp.comps',
  'myApp.home',
  'myApp.login',
  'myApp.version',
  'ngMaterial',
  'ui.router'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  otherwise({redirectTo: '/home'});
}]).
controller("RootCtrl",['$scope', '$stateProvider', function($scope, $stateProvider){
  $scope.loggedIn = false;
  $scope.logIn = function(){
    $scope.loggedIn = true;
    $stateProvider.state();
    };
  $scope.logOut = function(){
    $scope.loggedIn = false;
  };
}]);
