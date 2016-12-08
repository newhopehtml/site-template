(function () {
    'use strict';  
     //var homeRoute = '/home';
    
    angular
        .module('nhc')
        .config(NHCConfiguration);

    NHCConfiguration.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'NHCServiceProvider'];
    function NHCConfiguration($stateProvider, $urlRouterProvider, $httpProvider, nhcProvider) {

        // -- default route --//
        $urlRouterProvider.otherwise(nhcProvider.constants.defaultRoute);

        nhcProvider.configureHttpProvider($httpProvider);

        // -- configure states -- //
        $stateProvider

            .state('home', {
                url:'/home',
                templateUrl:'./js/app/views/home.html'
            })
            .state('about', {
                url:'/about',
                templateUrl:'./js/app/views/about.html'
            })
            .state('next-steps', {
                url:'/next-steps',
                templateUrl:'./js/app/views/next-steps.html'
            })
            .state('ministries', {
                url:'/ministries',
                templateUrl:'./js/app/views/ministries.html'
            })
            .state('give', {
                url:'/next-steps',
                templateUrl:'./js/app/views/give.html'
            })
            .state('contact', {
                url:'/contact',
                templateUrl:'./js/app/views/contact.html'
            })
             .state('watch', {
                url:'/watch',
                templateUrl:'./js/app/views/watch.html'
            })
    }
})();
