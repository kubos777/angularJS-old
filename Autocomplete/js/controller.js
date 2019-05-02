/**
* PrimerApp Module
*
* Description
*/
var app = angular.module('PrimerApp', [])
.directive("myAutocomplete",function(){
		//$(element) ->  jquery
		//var element  -> js
		//$element -> angular
	function link(scope,element,attrs){
		console.log(scope);
		$(element).autocomplete({	
			source: scope.$eval(attrs.myAutocomplete),
			select: function(ev,ui){
						ev.preventDefault();
						if (ui.item) {
							scope.optionSelected(ui.item.value);
						}
					},
			focus: function(ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);	
			}
		});
};

return {
	link: link
};

})


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
	s.repos = [];
	h.get("https://api.github.com/users/kubos777/repos")
	//Cuándo si recibo bien los datos
	.then(function(response){
		//console.log(response);
		s.posts = response.data;
		//Para guardar los nombres de los repos y mostrarlos con autocomplete
			for (var i = response.data.length - 1; i >= 0; i--) {
				var repo = response.data[i];
				s.repos.push(repo.name);
			};
		//console.log(s.posts)
	//Cuando no llegan los datos
	},function(error){
		console.log(error);
		console.log("No llegaron los datos");
	});

	s.optionSelected = function(data){
		s.$apply(function(){
			s.main_repo = data;
		})
	}



}]);