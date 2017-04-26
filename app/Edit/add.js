angular.module('myApp.add',['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add', {
            templateUrl: 'Edit/add.html',
            controller: 'AddCtrl'
        })
            .when('/addMember',{
                templateUrl:'Edit/addMember.html',
                controller:'AddMemberCtrl'
        })
            .when('/addStaff',{
                templateUrl:'Edit/addStaff.html',
                controller:'AddStaffCtrl'
            });
    }]).
controller('AddCtrl', function ($scope) {

})
    .controller('AddMemberCtrl',function($scope){

    })
    .controller('AddStaffCtrl',function($scope){

    });