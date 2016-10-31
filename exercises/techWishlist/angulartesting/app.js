var app = angular.module("myApp", []);

app.controller("myController", ["$scope", function ($scope) {
    $scope.person = [
        {
            firstName: "Stetson",
            lastName: "Peck"
        },
        {
            firstName: "Eric",
            lastName: "Jones"
        }

    ];
}]);