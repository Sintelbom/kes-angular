app.controller('ServiceCtrl', [
	    '$scope', 'DemoService',
function($scope, DemoService) {
	$scope.click = function(message) {
		DemoService(message);
	};
}]);