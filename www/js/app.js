// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic'])

myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/templates/home',
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .state('member', {
            url: '/templates/member',
            templateUrl: 'templates/member.html',
            controller: 'memberController'
        })
        .state('logIn', {
            url: '/templates/logIn',
            templateUrl: 'templates/logIn.html',
            controller: 'logInConfirmController'
        })
        .state('register', {
            url: '/templates/register',
            templateUrl: 'templates/register.html',
            controller: 'registerController'
        })

    $urlRouterProvider.otherwise('/templates/home');

});