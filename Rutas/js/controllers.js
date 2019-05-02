angular.module("PrimerApp") //Le indicamos a qué módulo pertenece
.controller('ReposController', ['$scope','$http', function(s,h){
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
}])

.controller('RepoController', ['$scope','$http','$routeParams', function(s,h,rp){
	s.repo = {};
	console.log(rp);
	h.get("https://api.github.com/repos/kubos777/"+rp.name)
	.then(function(response){
		console.log(response);
		s.repo = response.data;
	},function(error){
		console.log("No llegaron los datos");
	})
	
}])