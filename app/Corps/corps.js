'use strict';

// adding ngResource module for API calls
angular.module('myApp.corps', ['ngRoute', 'ngResource'])

// .when() specifies a URL, and a template and controller to link to that URL.
// .otherwise() can be added to the end as a fallback if no URLs match
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/corps', {
    templateUrl: 'Corps/corps.html',
    controller: 'CorpsCtrl'
  })
  .when('/corps/:corpsName', {
    templateUrl: 'Corps/corps_detail.html',
    controller: 'CorpsDetailCtrl'
  });
}])

// The $scope service makes data available to the template associated with this
// controller (specified in the config block above).
// The $resource service gives us an elegant way to make API calls.
// The $location service allows us to manipulate the local URL.
.controller('CorpsCtrl', ['$scope', '$resource', '$location', function($scope, $resource, $location) {

  // corpsApi is a resource object, which allows us to make API requests
  var corpsApi = $resource(projectApi('corps/all.php'));

  // corpsApi.query() issues a GET request to the URL we just specified
  // and expects a JSON array in return
  // (if we expected a single JSON object instead, we'd use corpsApi.get()).
  // Once the request is complete, $scope.corps will be whatever data was
  // returned by the API
  $scope.corps = corpsApi.query();

  // $scope.showDetails = function(corpsName) {
  //   console.log("going to " + corpsName + " detail page...");
  //   // path() automatically escapes spaces or other special characters in corpsName
  //   $location.path('/corps/' + corpsName);
  // };

}])

.controller('CorpsDetailCtrl', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams) {

  // projectApi('corps/detail') is the API path.
  // The object with the 'name' property sets the query string 'name' to the
  // corps name provided in the URL to this page.
  // Ex: if the frontend URL was '/corps/Bluecoats', the API call would be
  // 'corps/detail?name=Bluecoats'
  var corpsApi = $resource(projectApi('corps/detail.php'), { name: $routeParams.corpsName });

  // We expect a single JSON object with the corps details instead of an array,
  // so now we'll use corpsApi.get()
  $scope.corps = corpsApi.get();

  var showsApi = $resource(projectApi('shows/corps.php'), { corpsName: $routeParams.corpsName });
  $scope.shows = showsApi.query();

  var compsApi = $resource(projectApi('comps/corps.php'), { corpsName: $routeParams.corpsName });
  $scope.comps = compsApi.query();

  $scope.getLogoPath = function(corpsName) {
    var formattedCorpsName = corpsName
      .split(' ').join('-') // replace spaces with hyphens
      .split('!').join('') // remove exclamation points
      .toLowerCase();
    console.log(formattedCorpsName);
    return projectApi('logos/' + formattedCorpsName + '.jpg');
  }

}]);
