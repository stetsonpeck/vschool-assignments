var express = require ("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join("public")));

app.use("posts", require("./routes/postRoutes"));

mongoose.connect("mongodb://localhost/posts", function() {
    console.log("connected to db")
});

app.listen(port, function() {
    console.log("i hear you on port" + port);
});
})