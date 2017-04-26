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
  'myApp.people',
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
