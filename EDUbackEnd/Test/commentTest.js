const mongoose = require("mongoose");
const { getCommentsSortedByDate } = require("../Services/commentService");
const Comment = require("../models/Comment");
const connect = require("../dbconnect");

// Connect to MongoDB
connect.then(async() => {
    console.log("Database connected.");

    try {
        // Test sorted comments
        await testSortedComments();

    } catch (error) {
        console.error("Error during testing:", error);
    } finally {
        mongoose.disconnect();
    }
}).catch((err) => {
    console.log("DB connection error:", err);
});

// Test function for sorted comments
const testSortedComments = async() => {
    try {
        // Clear existing comments
        await Comment.deleteMany({});

        const comments = [
            { Commentor: 'User1', Content: 'First comment', date: new Date('2023-01-01') },
            { Commentor: 'User2', Content: 'Second comment', date: new Date('2023-01-03') },
            { Commentor: 'User3', Content: 'Third comment', date: new Date('2023-01-02') },
        ];

        await Comment.insertMany(comments);

        // Get sorted comments
        const sortedComments = await getCommentsSortedByDate();
        console.log("Sorted Comments:", sortedComments);

        // Verify the order
        if (sortedComments.length === 3 &&
            sortedComments[0].Content === 'First comment' &&
            sortedComments[1].Content === 'Third comment' &&
            sortedComments[2].Content === 'Second comment') {
            console.log("Test passed: Comments are sorted correctly by date.");
        } else {
            console.error("Test failed: Comments are not sorted correctly by date.");
        }
    } catch (error) {
        console.error("Error during test:", error);
    }
};