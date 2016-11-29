var express = require("express")
var todolistRoutes = express.Router();
var uuid = require("uuid");

module.exports = todolistRoutes;
var listofThings = [
    {
        item: "run",
        description: "goooooooo",
        id: uuid.v4(),

    },
    {
        item: "get groceries",
        description: "purchase sustanance",
        id: uuid.v4(),
    },

];



todolistRoutes.get("/", function (req, res) {
    res.send(listofThings);
});

todolistRoutes.post("/post", function (req, res) {
   var todo = req.body;
    todo.id = uuid.v4();
    listofThings.push(todo);
    res.send(todo)
});

todolistRoutes.delete("/:toDoListId/", function (req, res) {
    for (var i = 0; i < listofThings.length; i++) {
        if (listofThings[i].id === req.params.toDoLitsId) {
            listofThings.splice(i, 1);
             res.send(listofThings);
        }
    }

});

todolistRoutes.put("/:toDoListId", function (req, res) {
    console.log("fucker")
    for (var i = 0; i < listofThings.length; i++) {
        if (listofThings[i].id === req.params.toDoListId) {
            listofThings[i] = req.body;
            res.send(listofThings);
        }
    }

});