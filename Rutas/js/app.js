/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', ["ngRoute"])
.config(['$routeProvider',function(rp) {
	//El routeProvider nos va a permitir definir las rutas
	rp.when("/",{
		controller: "ReposController",
		templateUrl: "templates/home.html"
	})
	.when("/repo/:name",{
		controller: "RepoController",
		templateUrl: "templates/repo.html"
	})
	.otherwise("/");
}])

