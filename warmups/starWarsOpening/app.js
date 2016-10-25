var app = angular.module("main", []);

app.controller("myCtrl", ["$scope", "$http", function($scope, $http){

    $http.get("http://swapi.co/api/films/1")
        .then(function(res){
            $scope.crawl = res.data.opening_crawl
        })

}])