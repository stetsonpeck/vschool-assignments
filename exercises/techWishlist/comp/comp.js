var app = angular.module("myApp");

app.controller("compController", ["$scope", function ($scope) {
    $scope.compTech = [
        {
            image: "emperor0.jpg",
            name: "Emperor Computer Chair",
            price: "$50,000"
        }, {
            image: "macbook.jpg",
            name: "Macbook Pro 15",
            price: "$2,800"
        }, {
            image: "pixel.png",
            name: "Google Pixel Phone",
            price: "$749"
        }
    ]
}])