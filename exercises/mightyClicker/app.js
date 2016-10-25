var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "RedService", "BlueService", function ($scope, RedService, BlueService) {
    $scope.redServ = RedService;
    $scope.blueServ = BlueService;

    $scope.redFunction = function () {
        RedService.increment();
        BlueService.decrement();
        if (BlueService.count <= 0) {
            BlueService.reset();
        }
    }

    $scope.blueFunction = function () {
        BlueService.increment();
        RedService.decrement();
        if (RedService.count <= 0) {
            RedService.reset();
        }
    }

}])


app.service("RedService", function () {
    this.count = 100;
    this.increment = function () {
        this.count++;
    }
    this.decrement = function () {
        this.count--;
    }
    this.reset = function () {
        this.count = 100;
    }
})

app.service("BlueService", function () {
    this.count = 100;
    this.increment = function () {
        this.count++;
    }
    this.decrement = function () {
        this.count--;
    }
    this.reset = function () {
        this.count = 100;
    }
})