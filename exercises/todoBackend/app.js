var app = angular.module("ToDoList", []);

app.service("ToDoListService", ["$http", function ($http) {
    var self = this;
    this.list = [];

    this.getToDoItems = function () {
        return $http.get("http.get/localhost:8000/toDoList")
            .then(function (response) {
                self.list = response.data;
            })
    };

    this.addToDoItem = function (item) {
        return $http.post("http.get/localhost:8000/toDoList", item)
            .then(function (response) {
                self.list.push(response.data);
            })
    };

    this.editToDoItem = function (item) {
        return $http.put("http.get/localhost:8000/toDoList" + item.id, item)
            
    }
    
    this.deleteToDoItem = function(item) {
        return $http.delete("http.get/localhost:8000/toDoList" + item.id, item)
        }
}])

app.controller("myController", ["$scope", "ToDoListService", function ($scope, ToDoListService) {


}]);






