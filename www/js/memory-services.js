app.factory('autorService', function(){
        var service = {};
		
		console.log('autorService');

		service.getListaDeAutores = function () {
			console.log('mensagemService getListaDeAutores');
			return service.autores;
		};

		service.getAutor = function (id) {
			console.log('mensagemService getAutor ' + id);
			for (var i = 0; i < service.autores.length; i++) {
				if (service.autores[i].id == id) {
					return service.autores[i];
				}
			};
		};
 
		service.autores = [
			{ id : 0, nome : 'Pr. Keila',  avatarURL : 'img/amy_jones.jpg'},
			{ id : 1, nome : 'Pr. Valmir', avatarURL : 'img/james_king.jpg'},
			{ id : 2, nome : 'Pr. Jorge' , avatarURL : 'img/ray_moore.jpg'},
     	  ];
    return service;
	}
);

app.factory('mensagemService', function(){
        var service = {};
		
		console.log('mensagemService');

		service.getListaDeMensagens = function () {
			console.log('mensagemService getListaDeMensagens');
			return service.mensagens;
		};

		service.getMensagem = function (id) {
			console.log('mensagemService getMensagem ' + id);
			for (var i = 0; i < service.mensagens.length; i++) {
				if (service.mensagens[i].id == id) {
					if (service.mensagens[i].msg == '') {
						return service.mensagens[i];
					}else{
						return service.mensagens[i];
					}
				}
			};
		};
		
		//service.autor = autorService;
		
		service.mensagens = [
			{ id : 0, data : '01/01/2013', hora : '01:00', autorId : 0, titulo : 'Os fortes continuam na Fé e os Fracos Desistem dela' , msg : 'Esta mensagem foi escrita no ano de 1900 e deve ser melhorada aqui'},
			{ id : 1, data : '02/01/2013', hora : '02:00', autorId : 2, titulo : 'Homens que choram' , msg : 'Esta mensagem foi escrita no ano de 1900 e deve ser melhorada aqui'},
			{ id : 2, data : '03/01/2013', hora : '03:00', autorId : 0, titulo : 'Mulheres que jejuam' , msg : 'Esta mensagem foi escrita no ano de 1900 e deve ser melhorada aqui'},
			{ id : 3, data : '04/01/2013', hora : '04:00', autorId : 1, titulo : 'A alegria esta na casa do Pai' , msg : 'Esta mensagem foi escrita no ano de 1900 e deve ser melhorada aqui'}
		  ];
    return service;
	}
);
	  

	  
	  
