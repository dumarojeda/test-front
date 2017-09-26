var app = angular.module('AppTestFront', []);

app.controller("appController", function ($scope, $http) {
   $http.get('http://localhost:8000/menu').success(function (item) {
   $scope.items = item;
 });
})