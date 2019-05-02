/**
* PrimerApp Module
*
* Description
*/

var app = angular.module('PrimerApp', [])
    .controller('ComentarioController',['$scope', function(m){
	m.nombre = "Papu";
	m.nuevoComentario = {};

	m.comentarios = [
	{
		comentario: "Buen ejercicio",
		nombre: "El papu"
	},
	{
		comentario:"Cool",
		nombre:"Vic"
	}
	];

	m.agregaComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {}
	}

}])