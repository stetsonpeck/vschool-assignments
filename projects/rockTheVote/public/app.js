var app = angular.module("voteApp", []); 

app.controller("VoteController", ["$scope", "VoteService", function($scope, VoteService) {
    $scope.posts = VoteService; 
    
    VoteService.getPosts().then( function(response) {});  
    
    $scope.addPost = function(post) {
        VoteService.addPost(post).then(function(response) {
            $scope.post = {}; 
        });
    }
    
    $scope.deletePost = function(post, index) {
        VoteService.deletePost(post, index).then(function(response) {});
    }
    
    $scope.updatePost = function(post, index) {
        VoteService.updatePost(post, index).then(function(response) {});
    }
    
    $scope.upVote = function(vote) {
        VoteService.upVote(vote).then(function(response) {});
    }
    
    $scope.downVote = function(vote) {
        VoteService.downVote(vote).then(function(response) {});
    }
    
    $scope.addComment = function(comment) {
        VoteService.addComment(comment).then(function(response) {
            $scope.comment = {};
        });
    }
    
    $scope.deleteComment = function(comment, index) {
        VoteService.deleteComment(comment, index).then(function(response) {});
    }
    
    $scope.updateComment = function (comment, index) {
        VoteService.updateComment(comment, index).then(function(response) {});
    }
}]);
Contact GitHub API Training Shop Blog About
