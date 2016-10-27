var app = angular.module("myApp", ["ngRoute"])

.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "homeController",
            templateUrl: "home/home.tpl.html"
        })
        .when("/about", {
            controller: "aboutController",
            templateUrl: "about/about.tpl.html"
        })
        .when("/why", {
            controller: "whyController",
            templateUrl: "why/why.tpl.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});