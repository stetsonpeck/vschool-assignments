var app = angular.module("HunterApp");

app.service("HunterService", ["$http", function ($http) {

    this.getHunters = function () {
        return $http.get("/hunter").then(function (response) {
            return response.data;
        }, function (err) {
            console.warn(err);
        });
    };
    this.getHunter = function (id) {
        return $http.get(`/hunter/${id}`).then(function (response) {
            return response.data;
        }, function (err) {
            console.warn(err);
        });
    }

}]);