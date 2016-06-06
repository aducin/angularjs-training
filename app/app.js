angular.module("MyApp", ['ui.bootstrap'])

.controller("MyController", ["$scope", "$http", function($scope, $http) {
	$scope.name = "Lucy";
}]);
