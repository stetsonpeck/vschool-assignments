var app = angular.module("MyApp", []);

app.controller("AddController",["$scope", function($scope) {
	$scope.num1;
	$scope.num2;
	$scope.addThem = function() {
		$scope.sum = parseInt($scope.num1) + parseInt($scope.num2);
	}
}])

app.controller("MultiplyController", ["$scope", function($scope) {
	$scope.num1;
	$scope.num2;
	$scope.multiplyThem = function() {
		$scope.product = parseInt($scope.num1) * parseInt($scope.num2);
	}
}])