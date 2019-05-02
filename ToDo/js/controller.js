/**
* ToDo Module
*
* Description
*/
var app = angular.module('ToDo', ["LocalStorageModule"])

.controller('ControllerToDo', ['$scope', 'localStorageService', function(s,ls){
	if (ls.get("angular-todo")) {
		s.todo = ls.get("angular-todo");
	}else{
		s.todo = [];
	}

	/*
		descripcion: "ngifdsfgida",
		fecha: "03-03-1414 09:32:32"
	*/
/*
	s.$watchCollection(function(){
		return s.newAct;
	},function(newValue,oldValue){
		console.log(newValue);
		console.log(oldValue);
	});
*/

	s.$watchCollection('todo',function(newValue,oldValue){
		ls.set("angular-todo",s.todo);
	});


	s.addAct = function(){
		s.todo.push(s.newAct);
		s.newAct = {};
		ls.set("angular-todo",s.todo);
	};
/*
	s.clean = function(){
		s.todo = [];
		ls.set("angular-todo",s.todo);
	}
*/
}])