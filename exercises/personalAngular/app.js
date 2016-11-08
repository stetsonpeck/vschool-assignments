var app = angular.module("myApp", []);

app.controller("myController", ["$scoope", "$http", function ($scope, $http) {
    $http.get("http://api.icndb.com/jokes/random")
        .then(function (response) {
            console.log(response.data);
        });
}]);