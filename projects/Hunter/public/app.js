var app = angular.module("HunterApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/hunter", {
            templateUrl: "components/hunter-list/hunter-list.html",
            controller: "HunterListController"
        })
        .when("/hunter/:hunterId", {
            templateUrl: "components/hunter-detail/hunter-detail.html",
            controller: "HunterDetailController"
        })
        .otherwise({
            redirectTo: "/hunter"
        })
}]);