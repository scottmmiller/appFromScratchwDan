var app = angular.module('weatherApp');

app.directive('clockWeather', function() {
	return {
		template: '<div> @ {{hours}}: {{minutes}}: {{seconds}} </div>',
		restrict: 'E',
		link: function(scope, element) {
			var date = new Date();
			scope.hours = date.getHours();
			scope.minutes = date.getMinutes();
			scope.seconds = date.getSeconds();

		}
	}
})