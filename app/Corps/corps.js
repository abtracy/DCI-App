'use strict';

angular.module('myApp.corps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/corps', {
    templateUrl: 'Corps/corps.html',
    controller: 'CorpsCtrl'
  });
}])

.controller('CorpsCtrl', [function() {

}]);