'use strict';

angular.module('myApp.comps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/comps', {
    templateUrl: 'Comps/comps.html',
    controller: 'CompsCtrl'
  })
  .when('/comps/:id', {
    templateUrl: 'Comps/comps_detail.html',
    controller: 'CompsDetailController'
  })
}])

.controller('CompsCtrl', ['$scope', '$resource', function($scope, $resource) {

  var compsApi = $resource(projectApi("/comps/all.php"));
  $scope.comps = compsApi.query();

}])

.controller('CompsDetailController', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams) {

  // get data for a particular competition (specified by id in URL params)
  var compsApi = $resource(projectApi("comps/detail.php"), { id: $routeParams.id });
  $scope.comp = compsApi.get(function() {
    var venueApi = $resource(projectApi("venues/detail.php"), { name: $scope.comp.venue });
    var venueData = venueApi.get(function() {
      // format venue as "name (city, state)"
      $scope.venue = venueData.name + " (" + venueData.city + ", " + venueData.state + ")";
    });
  });

  // get scores for this competition
  $scope.scores = [];
  var scoresApi = $resource(projectApi("scores/show.php"), { id: $routeParams.id });
  $scope.scores = scoresApi.query();

}]);
