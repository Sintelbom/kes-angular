app.service('DemoService', [
	    '$window', 
function($window) {
	var messages = [];
	return function(message) {
		messages.push(message);
		if (messages.length == 3) {
			$window.alert(messages.join("\n"));
			messages = [];
		}
	};
}]);