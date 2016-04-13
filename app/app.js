/**
 * Created by herbertqiao on 4/8/16.
 */
'use strict';

angular.module('RootRegisterFrontend', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'viewer/intro.html',
        controller: 'IntroCtrl'
    }).when('/register', {
        templateUrl: 'viewer/register.html',
        controller: 'RegisterCtrl'
    }).when('/admin', {
        templateUrl: 'viewer/admin.html',
        controller: 'AdminCtrl'
    }).when('/accommodation', {
        templateUrl: 'viewer/accommodation.html'
    }).otherwise({redirectTo: '/'});
}
]);