'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/beers', {
      templateUrl: '/expose/beers/index',
      controller: 'BeerIndexController'
    }).
    when('/beers/new', {
      templateUrl: '/expose/beers/new',
      controller: 'BeerNewController'
    }).
    when('/beers/:id', {
      templateUrl: '/expose/beers/edit',
      controller: 'BeerUpdateController'
    }).
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
