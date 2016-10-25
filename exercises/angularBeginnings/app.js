var app = angular.module("myApp", []);
app.controller("MainController", function ($scope) {
    $scope.name = "";
    $scope.submitName = function () {
        console.log($scope.name);
    }
})