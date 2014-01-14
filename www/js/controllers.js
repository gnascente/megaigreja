app.controller('MainCtrl', function ($scope, $rootScope,$location,$window, mensagemService, autorService) {
	$rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
    }
	$rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
	}
	
	console.log('MainCtrl init');
	
	$scope.mensagens = mensagemService.getListaDeMensagens(); 
	
	$scope.getAutor = function(mensagem) {
		return autorService.getAutor(mensagem.autorId);
	}

});

app.controller('MensagemDetailsCtrl', function ($scope, $routeParams, mensagemService, autorService) {
	
	console.log('MensagemDetailsCtrl init');
	
	$scope.mensagem = mensagemService.getMensagem($routeParams.mensagemId); 
	
	$scope.getAutor = function(mensagem) {
		return autorService.getAutor(mensagem.autorId);
	}

});