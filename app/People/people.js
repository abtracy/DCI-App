'use strict';

// adding ngResource module for API calls
angular.module('myApp.people', ['ngRoute', 'ngResource'])

// .when() specifies a URL, and a template and controller to link to that URL.
// .otherwise() can be added to the end as a fallback if no URLs match
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/people', {
    templateUrl: 'People/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$resource', function($scope, $resource) {
  $scope.personName = "";
  $scope.people = [];

  $scope.submit = function() {
    $scope.peopleApi = $resource(projectApi('/people/search.php'), { name: $scope.personName });
    $scope.people = $scope.peopleApi.query(function() {
      // console.log($scope.people);
    });
  }
}]);
