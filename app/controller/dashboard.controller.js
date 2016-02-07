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
        },
        {
            name: "Cat 3",
            image: "../../assets/cat3.jpg",
            clickCount:0
        },
        {
            name: "Cat 4",
            image: "../../assets/cat4.jpg",
            clickCount:0
        },
        {
            name: "Cat 5",
            image: "../../assets/cat5.jpg",
            clickCount:0
        }
    ];
    
    $scope.selectedCatIndex = 0;
    
    $scope.showCat = function(index) {
        $scope.selectedCatIndex = index; 
    };
    
    $scope.incrementCount = function() {
        $scope.catDetails[$scope.selectedCatIndex].clickCount++;
    };
}]);