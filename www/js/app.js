var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngTouch']);


app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/Mensagem.html',
      controller: 'MainCtrl'
    })
	.when('/mensagem/:mensagemId', {
      templateUrl: 'partials/MensagemDetails.html',
      controller: 'MensagemDetailsCtrl'
    })
	.otherwise({
      redirectTo: '/'
    });
});


