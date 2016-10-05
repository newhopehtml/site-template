(function () {
  'use strict';

  var homeRoute = '/home';
  var defaultRoute = homeRoute;

  angular
    .module('nhc')
    .constant('constants', {
      'homeRoute': homeRoute,
      'defaultRoute': defaultRoute
    });
})();

