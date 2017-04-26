angular.module('myApp.add',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add', {
            templateUrl: 'Edit/add.html',
            controller: 'AddCtrl'
        })
            .when('/addMember',{
                templateUrl:'Edit/addMember.html',
                controller:'AddMemberCtrl'
        });
    }]).
controller('AddCtrl', function ($scope) {

})
    .controller('AddMemberCtrl',function($scope){
        
    });