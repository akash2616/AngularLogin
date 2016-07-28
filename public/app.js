var app = angular.module('day1',['ngRoute'])
app.controller('Day1Ctrl', function($scope) {
})

app.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/login', {
            templateUrl:'view/login.html'
        }).
        when('/home', {
            templateUrl:'view/HomePage.html'
        }).
        when('/registerUser', {
            templateUrl:'view/Register.html'
        }).

        otherwise('/login');
    }
]);