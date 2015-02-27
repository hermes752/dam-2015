var todoApp=angular.module('todoApp',[]);
console.log(todoApp);

todoApp.controller('TodoController', ['$scope',function($scope){
var todos=[];
todos.push({done:false, task:'Apender AngularJS'});
todos.push({done:false, task:'Apender Ionic'});
todos.push({done:true, task:'Adorar JavaScript'});

$scope.todos=todos;
$scope.addTodo=function(){
todos.push({done:false, task:$scope.inputText});
$scope.inputText='';

};

}]);
