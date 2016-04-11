/**
 * Created by herbertqiao on 4/10/16.
 */
angular.module('RootRegisterFrontend')
    .controller('IntroCtrl', function ($scope) {
        $scope.jump = function () {
            location.href = "#/register"
        }
    });