const mongoose = require("mongoose");
const Comment = require("../models/Comment");
const connect = require("../dbconnect");

// Connect to MongoDB
connect.then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("DB connection error:", err);
});

// Function to get comments sorted by date
const getCommentsSortedByDate = async() => {
    try {
        const sortedComments = await Comment.find().sort({ date: 1 }).exec();
        return sortedComments;
    } catch (error) {
        console.error("Error fetching sorted comments:", error);
        throw error;
    }
};

module.exports = {
    getCommentsSortedByDate
};