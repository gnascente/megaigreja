var app = angular.module('myApp', ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/Mensagem.html',
      controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});