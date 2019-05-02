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

.service('ToDoService', ['localStorageService', function(lss){
	this.key = "angular-todoList";
	if (lss.get(this.key)) {
		this.activities = lss.get(this.key) 
	}else{
		this.activities = [];
	}

	this.add = function(newAct){
		this.activities.push(newAct);
		this.updateLocalStorage();
	}
	this.updateLocalStorage = function(){
		lss.set(this.key,this.activities);
	}
	this.clean = function(){
		this.activities = [];
		this.updateLocalStorage();
	}
	this.getAll = function(){
		return this.activities;
	}
	//Para remover por actividad
	this.removeItem = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !==item;
		})
		this.updateLocalStorage();
		return this.getAll();
	}

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