var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 8000;

// Middleware \\
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Routes \\
app.use("/hunter", require("./routes/hunterRoutes"));

// Database connection \\
mongoose.connect("mongodb://localhost/random", function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database");
})

app.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});