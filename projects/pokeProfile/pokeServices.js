var app = angular.module("pokeApp");

app.service("PokeService", ["$http", function ($http) {
    this.pokeNumber = 0;
    var baseUrl = "http://pokeapi.co/api/v1/pokemon/";
    var imgUrl = "http://pokeapi.co/api/v1/sprite/";

    this.getPokemon = function (pokeNumber) {
        var pokemon = {};
        return $http.get(baseUrl + pokeNumber).then(function (response) {
            pokemon.name = response.data.name;
            pokemon.attack = response.data.attack;
            pokemon.abilities = response.data.abilities[0].name;
            return $http.get(imgUrl + pokeNumber);
        }).then(function (response) {
            pokemon.image = "http://pokeapi.co" + response.data.image;
            console.log(pokemon.image);
            return pokemon;
        });
    };
}]);