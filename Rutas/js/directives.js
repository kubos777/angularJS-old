angular.module("PrimerApp") //Le indicamos a qué módulo pertenece
.directive("myAutocomplete",function(){
		//$(element) ->  jquery
		//var element  -> js
		//$element -> angular
	function link(scope,element,attrs){
		//console.log(scope);
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
