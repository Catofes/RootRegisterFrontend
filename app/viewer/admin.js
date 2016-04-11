/**
 * Created by herbertqiao on 4/10/16.
 */
angular.module('RootRegisterFrontend')
    .controller('AdminCtrl', function ($scope, APIService) {
        $scope.a = {};
        $scope.students = [];

        $scope.get_students = function () {
            APIService.Students($scope.a).$promise
                .then(function (data) {
                    $scope.students = data;
                })
        }
    });
