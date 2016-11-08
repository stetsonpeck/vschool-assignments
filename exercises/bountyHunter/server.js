var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var uuid = require("uuid");
//app.use(uuid.v4());


app.listen(8000, function () {
    console.log("server is listening")
});

var bounties = [
    {
        firstName: "",
        lastName: "",
        living: "",
        bountyAmt: "",
        type: "",
        id: uuid.v4()
    }
]

app.get("/bounties", function (req, res) {
    res.send(bounties);
});


app.post("/bounties", function (req, res) {
    var bounty = req.body;
    bounty.id = uuid.v4();
    bounties.push(bounty);
    res.send(bounty);
});

app.put("/bounties/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === (req.params.bountyId)) {
            bounties[i] = req.body;
            res.send(bounties);
        }
    }
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