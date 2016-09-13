var cycleApp = angular.module('cycleApp', ['ngRoute']);

cycleApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
