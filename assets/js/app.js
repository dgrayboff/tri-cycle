var cycleApp = angular.module('cycleApp', ['ngRoute']);

cycleApp.config(function($routeProvider){
  $routeProvider

  .when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
});
