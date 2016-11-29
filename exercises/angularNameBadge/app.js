var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.people = [
        {
            firstName: "stetson",
            lastName: "peck",
            email: "test",
            birthPlace: "slc",
            phone: 2223334567,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "tyler",
            lastName: "peck",
            email: "tyler@gmail.com",
            birthPlace: "slc",
            phone: 1234563432,
            food: "pizza",
            about: "stuff"
        },
    ];
    $scope.colors = ['red', 'blue', 'green', 'brown', 'purple']

    $scope.addPerson = function (person) {
        $scope.people.push(person);
        $scope.person = {};
    };

}]);