var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
var add = require("./app")
app.use(add);


app.get("/stetson", function (req, res) {
    var test = req.stetson;
    console.log("stetsonFunction")
    res.send(test)
})


app.listen(8000, function () {
    console.log("at yo 8000 service sir")
});