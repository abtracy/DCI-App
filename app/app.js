'use strict';

// a helper function to avoid typing the full API address constantly
var projectApi = function(path) {
  return 'http://plato.cs.virginia.edu/~hab9sr/dci-backend/' + path;
  // return 'http://localhost:80/dci-backend/' + path;
};

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.corps',
  'myApp.comps',
  'myApp.home',
  'myApp.login',
  'myApp.add',
  'ngMaterial',
  'ui.router',
  'myApp.people',
  'myApp.version'
]).

// see http://stackoverflow.com/questions/23931040/how-inject-stateprovider-in-angular-application
// and http://stackoverflow.com/questions/31119896/unknown-provider-stateproviderprovider-stateprovider
// for troubleshooting $stateProvider
config(['$locationProvider', '$routeProvider', '$stateProvider', function($locationProvider, $routeProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('home',{
    url:'/home',
    templateUrl: '/Home/home',
    controller: 'HomeCtrl'
  });
  $routeProvider.
  otherwise({redirectTo: '/home'});
}]).
controller("RootCtrl",['$scope', '$state', function($scope, $state){
  $scope.loggedIn = false;
  $scope.failedLogin = false;
  this.username = '';
  this.password = '';
  $scope.logIn = function(){
    if(this.username === "admin"){
      if(this.password === "DCIRox"){
        $scope.loggedIn = true;
        $scope.failedLogin = false;
        $state.go('home');
      } else {
        $scope.failedLogin = true;
      }
    } else {
      $scope.failedLogin = true;
    }

    };
  $scope.logOut = function(){
    $scope.loggedIn = false;
  };
}]);
