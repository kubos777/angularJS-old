/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])

.controller('AngularController', ['$scope', function(s){
	s.nombre = "El papu";
	/*setTimeout(function(){
		s.$apply(function(){
		s.nombre = "Chicotery";
		console.log(s.nombre);
		})
	},2000);
	console.log("Holi");
	*/
	document.querySelector('#mi_boton').addEventListener("click",function(){
		s.$apply(function(){
			s.nombre = "Chicoterry";
		});
	})

}])