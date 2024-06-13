const mongoose = require("mongoose");
const { addPost, addCommentToPost, getPostWithSortedComments } = require("./../Services/postService");
const connect = require("./../dbconnect");

connect.then(() => {
    console.log("Database connected")
});

const testPostComments = async() => {
    try {
        // Clear existing posts and comments
        // await mongoose.connection.db.dropDatabase(); //lazm ttshal b3d el test  

        // Add a test post
        const postDetails = {
            content: "This is a test post",
            author: "Author1",
            title: "Test Post",
            type: "General"
        };
        const newPost = await addPost(postDetails);

        // Add comments to the post
        const comments = [
            { Commentor: 'User1', Content: 'First comment', date: new Date('2023-01-01') },
            { Commentor: 'User2', Content: 'Second comment', date: new Date('2023-01-03') },
            { Commentor: 'User3', Content: 'Third comment', date: new Date('2023-01-02') },
        ];

        for (const comment of comments) {
            await addCommentToPost(newPost._id, comment);
        }

        // Get the post with sorted comments
        const postWithComments = await getPostWithSortedComments(newPost._id);
        console.log("Post with Sorted Comments:", JSON.stringify(postWithComments, null, 2));

        // Verify the order of comments
        if (postWithComments.comments.length === 3 &&
            postWithComments.comments[0].Content === 'First comment' &&
            postWithComments.comments[1].Content === 'Third comment' &&
            postWithComments.comments[2].Content === 'Second comment') {
            console.log("Test passed: Comments are sorted correctly by date.");
        } else {
            console.error("Test failed: Comments are not sorted correctly by date.");
        }
    } catch (error) {
        console.error("Error during test:", error);
    } finally {
        // Close the connection after the test
        mongoose.connection.close();
    }
};

testPostComments();
or("Error during test:", error);