var express = require("express");
var hunterRoutes = express.Router();
var Hunter = require("../models/hunter");

hunterRoutes.route("/")

.get(function (req, res) {

        Hunter.find(function (err, hunters) {

            if (err) return res.status(500).send(err);

            res.send(hunters);
        });
    })
    .post(function (req, res) {
        var newHunter = new Hunter(req.body);
        newHunter.save(function (err) {
            if (err) return res.status(500).send(err);
            res.send(newHunter);
        });
    });
hunterRoutes.route("/:id")
    .get(function (req, res) {
        Hunter.findById(req.params.id, function (err, hunter) {
            if (err) return res.status(500).send(err);
            res.send(hunter);
        });
    })
    .put(function (req, res) {
        Hunter.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            },
            function (err, hunter) {
                if (err) return res.status(500).send(err);
                res.send(hunter);
            });
    })

.delete(function (req, res) {

    Hunter.findByIdAndRemove(req.params.id, function (err, hunter) {
        if (err) return res.status(500).send(err);
        res.send(hunter);
    });
});
hunterRoutes.route("/:id/comment")
    .post(function (req, res) {
        Hunter.findByIdAndUpdate(
            req.params.id, {
                $push: {
                    comments: req.body
                }
            }, {
                new: true
            },
            function (err, hunter) {
                if (err) return res.status(500).send(err);
                res.send(hunter);
            });
    });
hunterRoutes.route("/:id/comment/:commentId")
    .put(function (req, res) {
        Hunter.findById(req.params.id, function (err, hunter) {
            if (err) return res.status(500).send(err);
            var comment = hunter.comments.id(req.params.commentId);
            comment.set(req.body);
            hunter.save(function (err) {
                if (err) return res.status(500).send(err);
                res.send(hunter);
            });
        });
    })
    .delete(function (req, res) {
        Hunter.findById(req.params.id, function (err, hunter) {
            if (err) return res.status(500).send(err);
            var comment = hunter.comments.id(req.params.commentId);
            comment.remove();
            hunter.save(function (err) {
                if (err) return res.status(500).send(err);
                res.send(hunter);
            });
        });
    });

module.exports = hunterRoutes;