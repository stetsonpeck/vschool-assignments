var app = angular.module("HunterApp");

app.controller("HunterDetailController", ["$scope", "$routeParams", "HunterService", function ($scope, $routeParams, HunterService) {

    HunterService.getHunter($routeParams.hunterId).then(function (hunter) {
        $scope.hunter = hunter;
    });
}]);