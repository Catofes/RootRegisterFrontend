/**
 * Created by herbertqiao on 4/10/16.
 */

angular.module('RootRegisterFrontend')
    .factory('APIService', function ($resource) {
        return $resource('api/:resource/', {password: '@password'},
            {
                Students: {method: 'GET', params: {resource: 'students'}, isArray: true},
                Register: {method: 'POST', params: {resource: 'students'}, isArray: false}
            });
    });