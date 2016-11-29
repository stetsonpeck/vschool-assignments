var app = angular.module("HunterApp");

app.controller("HunterListController", ["$scope", "HunterService", function ($scope, HunterService) {

    HunterService.getHunters().then(function (hunters) {
        $scope.hunters = hunters;
    });
}]);