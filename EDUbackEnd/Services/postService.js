const mongoose = require("mongoose");
const Post = require("./../models/Post");
const Comment = require("./../models/Comment");

// Function to add a new post
const addPost = async(postDetails) => {
    try {
        const newPost = new Post(postDetails);
        await newPost.save();
        return newPost;
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};

// Function to add a new comment to a post
const addCommentToPost = async(postId, commentDetails) => {
    try {
        const newComment = new Comment(commentDetails);
        await newComment.save();

        const post = await Post.findById(postId);
        post.comments.push(newComment._id);
        await post.save();

        return newComment;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error;
    }
};

// Function to get a post with sorted comments by date
const getPostWithSortedComments = async(postId) => {
    try {
        const post = await Post.findById(postId).populate({
            path: 'comments',
            options: { sort: { date: 1 } } // Sort comments by date mn eloldest ll newest
        }).exec();
        return post;
    } catch (error) {
        console.error("Error fetching post with comments:", error);
        throw error;
    }
};

module.exports = {
    addPost,
    addCommentToPost,
    getPostWithSortedComments
};