﻿angular
    .module('azurespeed')
    .controller('downloadCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.items = utils.getRegions();
        angular.forEach($scope.items, function (value, key) {
            var data = { region: value.region, blobName: '100MB.bin', operation: 'download' };
            $http.get('/api/sas', { params: data }).success(function (response) {
                console.log(response);
                value.url = response;
            });
        });
    }]);