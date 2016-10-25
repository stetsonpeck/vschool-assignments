var app = angular.module('MyApp', []);
app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    $scope.sentence = '';
    $scope.submit = function () {
        $scope.input = $scope.sentence;
        console.log($scope.sentence);
        $http.get('https://yoda.p.mashape.com/yoda?sentence= ' + $scope.sentence, config)
            .then(function (response) {
                $scope.yodaTalk = response.data;
                console.log($scope.yodaTalk);
            })
    };
}]);