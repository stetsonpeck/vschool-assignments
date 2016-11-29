var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

var Schema = mongoose.Schema;

var bountiesSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

var Bounty = mongoose.model("Bounty", bountiesSchema);



app.listen(8000, function () {
    console.log("server is listening")
});

app.get("/bounties", function (req, res) {
    Bounty.find( function (err, bounties) {
        res.send(bounties);
    });
});


app.post("/bounties", function (req, res) {
    var newBounty = new Bounty(req.body);
    newBounty.save( function (err, new_bounty) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newBounty);
        }

    });
});

app.put("/bounties/:bountyId", function (req, res) {
    Bounty.findByIdAndUpdate(req.params.bountyId, req.body, {new: true}, function(err, updatedBounty) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(updatedBounty);
        }

    });
});

app.delete("bounties/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === (req.params.bountyId)) {
            bounties.splice(i, 1);
            break;
        }
    }
    res.send(bounties);
})