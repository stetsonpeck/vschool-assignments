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