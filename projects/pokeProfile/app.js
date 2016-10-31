var app = angular.module("pokeApp", []);

app.controller("PokeController", ["$scope", "PokeService", function ($scope, PokeService) {
    $scope.pokeNumber = 0;
    $scope.pokemon = {};

    $scope.getPokemon = function (pokeNumber) {
        PokeService.getPokemon(pokeNumber).then(function (pokemon) {
            $scope.pokemon = pokemon;
            $scope.pokeNumber = 0;
        });
    }
}]);