var app = angular.module('weatherApp');

app.controller('weatherCtrl', function($scope, weather) {

	$scope.test = "Is this the Weather.html!?!?!"

	$scope.weather = weather;
	console.log(weather);

});