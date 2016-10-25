var app = angular.module("myApp", ["ngRoute"])

.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "home/home.tpl.html"
    });
})


.config(function ($routeProvider) {
    $routeProvider.when("/about", {
        controller: "aboutController",
        templateUrl: "about/about.tpl.html"
    });
})


.config(function ($routeProvider) {
    $routeProvider.when("/why", {
        controller: "whyController",
        templateUrl: "why/why.tpl.html"
    });
})