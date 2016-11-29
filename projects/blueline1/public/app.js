var app = angular.module("blpcApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/blog", {
            templateUrl: "components/blog-list/blog-list.html",
            controller: "BlogListController"
        })
        .when("/blog/:blogId", {
            templateUrl: "components/blog-detail/blog-detail.html",
            controller: "BlogDetailController"
        })
}]);

new BugController({
    'minBugs': 10,
    'maxBugs': 50,
    'mouseOver': 'die'
});

new SpiderController();