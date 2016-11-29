var express = require("express"); 
var app = express(); 
var Post = require("../models/post.js");
var postRoute = express.Router(); 


postRoute.route("/").get(function(req, res) {
    Post.find(function (err, posts) {
        if (err) res.status(500).send(err); 
        else res.send(posts);
        console.log("retrieved"); 
    });
}).post(function(req, res) {
    var newPost = Post(req.body); 
    newPost.save(function(err, post) {
        if (err) res.status(500).send(err); 
        else res.send(post); 
    });
});

postRoute.route("/:id").delete(function(req, res) {
    Post.findByIdAndRemove(req.params.id, function(err, post) {
        if (err) res.status(500).send(err);
        else
        var response = {
            message: "Item deleted",
            id: post._id 
        }
        res.send(response); 
    });

}).put(function(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, post) {
        if (err) res.status(500).send(err);
        else post.save(); 
        res.send(post); 
    });
});
//app.delete("/posts/:postsId", function (req, res) {
//    for (var i = 0; i < postList.length; i++) {
//        if (postList[i].id === req.params.postsId) {
//            postList.splice(i, 1);
//            return res.send("Topic Deleted");
//        }
//    }
//    res.send("No matching ID found.");
//});
//
//app.put("/posts/:postsId", function (req, res) {
//    for (var i = 0; i < postList.length; i++) {
//        if (postList[i].id === req.params.postsId) {
//            postList[i] = req.body;
//            return res.send(postList[i]);
//        }
//    }
//    res.send("No matching ID found.");
//});

module.exports = postRoute;

