var app = angular.module('myApp', [])
app.controller('myController', function () {
    var todoList = this;
    todoList.todos = [];

    todoList.addTodo = function () {
        todoList.todos.push({
            text: todoList.todoText,
            price: todoList.todoPrice,
            img: todoList.todoImg,
            done: false
        });
        todoList.todoText = '';
        todoList.todoPrice = '';
        todoList.todoImg = '';
    };

    todoList.archive = function () {
        var oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});

//var app = angular.module("MyApp");
//
//app.service("TodoService", ["$http", function ($http) {
//    var self = this;
//    this.todoItems = [];
//
//    this.getTodos = function () {
//        return $http.get("http://api.vschool.io/stetson/todo")
//            .then(function (response) {
//                self.todoItems = response.data;
//            });
//    }
//
//    this.postTodo = function (todo) {
//        $http.post("http://api.vschool.io/stetson/todo", todo).then(function (response) {
//            self.todoItems.push(response.data);
//        });
//    };
//}]);