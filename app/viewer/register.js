/**
 * Created by herbertqiao on 4/10/16.
 */

angular.module('RootRegisterFrontend')
    .controller('RegisterCtrl', function ($scope, APIService) {
        $scope.i = {};
        $scope.i.register_success = false;
        $scope.i.register_failed = false;
        $scope.i.error_messge = "";
        $scope.r = {};


        $scope.submit = function () {
            $scope.register_success = false;
            $scope.register_failed = false;
            if ($scope.r.arrive_date)
                $scope.r.arrive_date = moment($scope.r.arrive_date).format("YYYY-MM-DD");
            if ($scope.r.leave_date)
                $scope.r.leave_date = moment($scope.r.leave_date).format("YYYY-MM-DD");
            console.log($scope.r);
            APIService.Register($scope.r).$promise
                .then(function (data) {
                    $scope.i.register_success = true;
                    $scope.i.register_failed = false;
                    $scope.i.error_message = "注册成功.请阅读说明完成余下步骤."
                }, function (data) {
                    console.log(data);
                    $scope.i.register_failed = true;
                    $scope.i.register_success = false;
                    $scope.i.error_message = "注册失败,原因:" + data.data.title;
                })
        };

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

    });