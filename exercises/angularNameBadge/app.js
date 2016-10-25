var app = angular.module("main", []);

app.controller("myCtrl", ["$scope", function ($scope) {
    $scope.badgeArray = [];
    $scope.submitForm = function () {
        $scope.badgeArray.push($scope.badge);
    }
}])