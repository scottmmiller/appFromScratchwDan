var app = angular.module('weatherApp');

app.controller('homeCtrl', function($scope, $location) {

	$scope.test = "Is this Working!?!?!"

	$scope.changeRoute = function() {
		$location.path('/weather/' + $scope.name);
	}

});