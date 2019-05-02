/**
* ToDo Module
*
* Description
*/
var app = angular.module('ToDo', ["LocalStorageModule"])

/*
Una factory, es un tipo de servicio que permite modularizar más
los elementos de angularJS.
*/

.factory('ToDoService', ['localStorageService', function(lss){
	var toDoService = {};
	toDoService.key = "angular-todoList";
	if (lss.get(toDoService.key)) {
		toDoService.activities = lss.get(toDoService.key) 
	}else{
		toDoService.activities = [];
	}

	toDoService.add = function(newAct){
		toDoService.activities.push(newAct);
		toDoService.updateLocalStorage();
	}
	toDoService.updateLocalStorage = function(){
		lss.set(toDoService.key,toDoService.activities);
	}
	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updateLocalStorage();
	}
	toDoService.getAll = function(){
		return toDoService.activities;
	}
	//Para remover por actividad
	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !==item;
		})
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	}
	return toDoService;

}])

.controller('ControllerToDo', ['$scope', 'ToDoService', function(s,tds){
	console.log(tds)
	
	s.todo = tds.getAll();
	
	s.newAct = {}
	s.addAct = function(){
		tds.add(s.newAct);
		s.newAct = {};
	}
	s.clean = function(){
		s.todo = tds.clean();
	}

	s.removeAct = function(item){
		s.todo = tds.removeItem(item)
	}
}])