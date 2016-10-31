var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/home/home.html",
            controller: "myController"
        })
        .when("/comp", {
            templateUrl: "/comp/comp.html",
            controller: "compController"
        })
        .when("/ottech", {
            templateUrl: "/ottech/ottech.html",
            controller: "ottechController"
        });
}]);