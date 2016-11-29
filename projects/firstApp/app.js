var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.item = [{
        name: "basketball",
        amount: "123",
        description: "full size leather basketball",
        firstName: "stetson",
        city: "Herriman",

    }, {
        name: "bike",
        amount: "123",
        description: "kids bike boy",
        firstName: "stetson",
        city: "slc"
    }];
    $scope.colors = ['red', 'blue', 'green', 'brown', 'purple']

    $scope.addItems = function (items) {
        $scope.item.push(items);
        $scope.items = {};
    };

}]);