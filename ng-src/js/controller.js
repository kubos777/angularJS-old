/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])
//backImg -> back-img
.directive('backImg', function(){
	return function(scope,element,attrs) {
		attrs.$observe('backImg', function(value){
			element.css({
				"background":"url("+value+")",
				"backgroun-position":"center",
				"background-size":"cover"

			});
		});
	}
})

.controller('AngularController', ['$scope','$http', function(s,h){
	h.get("https://api.github.com/users/kubos777/repos")
	//Cuándo si recibo bien los datos
	.then(function(response){
		console.log(response)
		s.repos=response.data;
	//Cuando no llegan los datos
	},function(error){
		console.log(error);
		console.log("No llegaron los datos");
	});


}])