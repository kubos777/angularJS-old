/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])
.run(function($rootScope){
	$rootScope.nombre = "El papu";
})
.controller('RootController', ['$scope', function(s){
	s.nombre = "Chicoterry";

}])
.controller('NietoController', ['$scope', function(s){
	s.nombre = "Vic";
}])
