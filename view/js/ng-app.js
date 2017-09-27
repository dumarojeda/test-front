var app = angular.module('AppTestFront', []);

app.controller("appController", function ($scope, $http) {
  $http.get('http://localhost:8000/menu').success(function (item) {
    $scope.items = item;
  });
  
  $scope.airplane = "Selecciona un link arriba";

  $scope.changeAirplane = function (id, name) {
    $scope.airplane = name;
  }

  $scope.sendForm = function(){
    var data = {
      name : $scope.name,
      email : $scope.email,
      phone : $scope.phone,
      age : $scope.age
    }

    $http.post('http://localhost:8000/postForm', data)
      .success(function (data, status, headers, config) {
        $scope.postDataResponse = data;
      })
      .error(function(data, status, header, config){
        $scope.postDataResponse = "Data: " + status;
    });
  }
});