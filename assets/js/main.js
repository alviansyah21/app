(function(angular) {
    'use strict';
    var app = angular.module('appSwapi', [])
    app.controller('searchSWAPI', ['$scope', '$http',
        function($scope, $http) {
            $scope.method = 'GET';
            $scope.fetch = function() {
                if ($scope.searchparam) {
                    $scope.url = 'https://swapi.co/api/' + $scope.searchparam + '/';
                    $http({
                        method: $scope.method,
                        url: $scope.url
                    }).
                    then(function(result) {
                        if (result) {
                            $scope.swapiResults = result.data.results;
                        }
                        else {
                        //error, swapi not found
                            console.log("not found");
                            $('.noResults').html("<div class='col'><h1 class='text-center'><strong>No Results Found.</strong></h1></div>");
                        }
                    }, function(result) {
                        console.log("failure");
                        $('.noResults').html("<div class='col'><h1 class='text-center'><strong>Network Or Data Error, Please Try Again.</strong></h1></div>");
                    });
                } else {
                    // no input value
                }
            };
        }
    ])
    app.directive('swapiSrchResults', function() {
        return {
            templateUrl: 'swapiResults.html'
        };
    });
})(window.angular);
