var mainApp = angular.module('mainApp', []);

mainApp.controller('dashboard', ['$scope', function($scope) {
    $scope.clickCount = 0;
    $scope.incrementCount = function() {
        $scope.clickCount ++;
    };
}]);