/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])
/*Creando filtro para remover código de HTML
Expresión regular: /<[^>]+>/gm, ''
*/
.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm, '');
	}	
})
.controller('FiltrosController', ['$scope', function(s){
	s.nombre = "<p><span><a>hola</a></span></p>";
	s.precio = 100;
	s.euro = 0.047*s.precio;
	s.yuan = 0.36*s.precio;
	s.libra = 0.040*s.precio;

	s.domicilio = {}
	s.domicilio.calle = "Chicoterry";
	s.domicilio.numero = 20;
	s.domicilio.cp = 1234;

}])