'use strict';

var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'view/main.html',
		controller: 'MainCtrl'
	});
}]);