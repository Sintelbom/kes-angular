app.controller('ViewCtrl', [
	    '$scope',
function($scope) {
	$scope.users = [
	    {firstname: 'Sander', lastname: 'Tetteroo'},
	    {firstname: 'Remco', lastname: 'van der Horst'}
	];
}]);