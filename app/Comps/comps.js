'use strict';

angular.module('myApp.comps', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comps', {
    templateUrl: 'Comps/comps.html',
    controller: 'CompsCtrl'
  });
}])

.controller('CompsCtrl', [function() {

}]);