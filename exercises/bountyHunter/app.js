var app = angular.module("myApp", []);

myApp.controller("myController", ["$scope", "$http", function ($scope, $http) {
    $scope.bounties = [];
    $scope.submitForm = function (bounty) {
        console.log(bounty)
        return $http.post("http://localhost:8000/bounty", bounty).then(function (response) {
            console.log(response.data)
        })
    }
}])