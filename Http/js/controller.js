/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])

.controller('ConexionController', ['$scope','$http', function(s,h){
	s.posts = [];
	s.nuevoPost = {}
	h.get("https://jsonplaceholder.typicode.com/posts")
	//Cuándo si recibo bien los datos
	.then(function(response){
		console.log(response)
		s.posts=response.data;
	//Cuando no llegan los datos
	},function(error){
		console.log(error);
		console.log("No llegaron los datos");
	});

	s.addPost = function(){
		h.post("https://jsonplaceholder.typicode.com/posts",{
			userId: '10',
			title: s.nuevoPost.title,
			body: s.nuevoPost.body
		})
		.then(function(response){
			s.posts.push(response.data);
			s.nuevoPost = {};
		},function(error){
			console.log(error);
			console.log("No se agregó nada");
		})

	}

}]);