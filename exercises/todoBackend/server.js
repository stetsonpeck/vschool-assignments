var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var cors = require("cors");
var todolistRoutes = require("./routes.js")
app.use(bodyParser.json());
app.use(cors());

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

app.use("/toDoList", todolistRoutes);

app.listen(8000, function () {
    console.log("app is listening");
});