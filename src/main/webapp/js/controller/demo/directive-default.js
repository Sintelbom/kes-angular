app.controller('DemoDirectiveDefaultCtrl', [
        '$scope',
function($scope) {
    $scope.ngif = 'ng-if';
    $scope.ngshow = 'ng-show';
    $scope.nghidden = 'ng-hidden';
    $scope.ngrepeat = [{'firstname': 'Sander'}, {'firstname': 'Remco'}];
    $scope.ngbind = 'ng-bind';
    $scope.ngmodel = 'ng-model';
    $scope.ngclick = function(click) {
    	
    };
    $scope.ngclass = 'ng-class';
}]);