'use strict';

// adding ngResource module for API calls
angular.module('myApp.corps', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/corps', {
    templateUrl: 'Corps/corps.html',
    controller: 'CorpsCtrl'
  });
}])

.controller('CorpsCtrl', ['$scope', '$resource', function($scope, $resource) {

  var corpsApi = $resource(projectApi('corps/all'));
  $scope.corps = corpsApi.query(function() {
    console.log($scope.corps);
  });

}]);
