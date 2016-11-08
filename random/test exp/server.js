var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send({
        message: "you did it!"
    });
});

app.listen(8000, function () {
    console.log("server is running on port 8000");
});

//http://localhost:8000/