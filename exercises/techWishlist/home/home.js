var app = angular.module("myApp");

app.controller("myController", ["$scope", function ($scope) {

}])


app.directive("eachItem", [function () {
    return {
        restrict: "E",
        templateUrl: "home/home.html",
        scope: {
            item: "="
        }
    }
}]);