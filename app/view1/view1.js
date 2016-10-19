'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.browsers = [
    {name:'chrome',share:45,color:'red'},
    {name:'firefox',share:45,color:'blue'},
    {name:'IE',share:10,color:'green'}
  ];
});