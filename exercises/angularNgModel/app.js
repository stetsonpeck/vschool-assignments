var myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope) {
    $scope.coolio = "";
    $scope.anything = function () {
        console.log($scope.coolio);
    }
})