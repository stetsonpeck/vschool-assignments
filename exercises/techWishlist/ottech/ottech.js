var app = angular.module("myApp");


app.controller("ottechController", ["$scope", function ($scope) {
    $scope.otTech = [
        {
            image: "am_foto_01.jpg",
            name: "AeroMobil 3.0",
            price: "$200,000"
        }, {
            image: "fenixwatch.jpg",
            name: "Garmin Fenix 3 HR Watch",
            price: "$599"
        }, {
            image: "icrap.jpg",
            name: "The iCrapper",
            price: "$priceless$"
        }
    ]
}])