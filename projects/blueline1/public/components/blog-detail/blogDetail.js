var app = angular.module("blpcApp");

app.controller("BlogDetailController", ["$scope", "$routeParams", "BlogService", function ($scope, $routeParams, BlogService) {

    BlogService.getBlog($routeParams.blogId).then(function (blog) {
        $scope.blog = blog;
    });
}]);
