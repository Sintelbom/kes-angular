'use strict';

var app = angular.module('app', [
    'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'view/main.html',
		controller: 'MainCtrl'
	}).
	when('/demo/two-way-data-binding', {
		templateUrl: 'view/demo/databinding.html',
		controller: 'DatabindingCtrl'
	}).
	when('/demo/view', {
		templateUrl: 'view/demo/view.html',
		controller: 'ViewCtrl'
	}).
	when('/demo/service', {
		templateUrl: 'view/demo/service.html',
		controller: 'ServiceCtrl'
	}).
	when('/info', {
		templateUrl: 'view/info.html'
	}).
	otherwise({
        redirectTo: '/'
    });
	
	$locationProvider.html5Mode(true);
}]);