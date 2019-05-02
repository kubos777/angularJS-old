/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])

.controller('ConexionController', ['$scope','$http', function(s,h){
	s.posts = [];
	s.loading = true;
	setTimeout(function(){
		h.get("https://jsonplaceholder.typicode.com/posts")
		//Cuándo si recibo bien los datos
		.then(function(response){
		console.log(response)
		s.posts=response.data;
		s.loading = false;
		//Cuando no llegan los datos
		},function(error){
		console.log(error);
		console.log("No llegaron los datos");
		});
	},1000)
	

	

}]);