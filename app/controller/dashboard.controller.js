var mainApp = angular.module('mainApp', []);

mainApp.controller('dashboard', ['$scope', function($scope) {
    $scope.catDetails = [
        {
            name: "Cat 1",
            image: "../../assets/cat1.jpg",
            clickCount:0
        },
        {
            name: "Cat 2",
            image: "../../assets/cat2.jpg",
            clickCount:0
        }
    ]
    
    $scope.incrementCount = function(index) {
        $scope.catDetails[index].clickCount++;
    };
}]);