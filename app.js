angular.module('natParkProject', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './js/home/home.html',
    controller: 'homeCtrl'
  })
  
  .state('parks', {
    url: '/parks',
    templateUrl: './js/parks/parks.html',
    controller: 'parksCtrl'
  })

  .state('hikes', {
    url: '/hikes',
    templateUrl: './js/hikes/hikes.html',
    controller: 'hikesCtrl'
  })

  .state('trips', {
    url: '/trips',
    templateUrl: './js/trips/trips.html',
    controller: 'tripsCtrl'
  })

  $urlRouterProvider
    .otherwise('/');

})
