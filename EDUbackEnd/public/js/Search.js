const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
    Commentor: {
        type: String
    },
    Content: {
        type: String
    },
    date: {
        type: Date
    },

    groupPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],


});

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
ews() {
        //     try {
        //         const news = await News.find({}).sort({ date: -1 });

        //         console.log(news);


        //         // Disconnect from MongoDB
        //         mongoose.disconnect();
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // // Function to get comments sorted by date
        // const getCommentsSortedByDate = async() => {
        //     try {
        //         const sortedComments = await Comment.find().sort({ date: 1 }).exec();
        //         return sortedComments;
        //     } catch (error) {
        //         console.error("Error fetching sorted comments:", error);
        //         throw error;
        //     }
        // };

        // // Just for testing....................................................
        // getCommentsSortedByDate().then(comments => {
        //     console.log("Sorted Comments:", comments);
        // }).catch(error => {
        //     console.error("Error:", error);
        // });


        // const testSortedComments = async() => {
        //     try {
        //         // Clear existing comments
        //         await Comment.deleteMany({});


        //         const comments = [
        //             { Commentor: 'User1', Content: 'First comment', date: new Date('2023-01-01') },
        //             { Commentor: 'User2', Content: 'Second comment', date: new Date('2023-01-03') },
        //             { Commentor: 'User3', Content: 'Third comment', date: new Date('2023-01-02') },
        //         ];

        //         await Comment.insertMany(comments);

        //         // Get sorted comments
        //         const sortedComments = await getCommentsSortedByDate();
        //         console.log("Sorted Comments:", sortedComments);

        //         // Verify the order
        //         if (sortedComments.length === 3 && sortedComments[0].Content === 'First comment' && sortedComments[1].Content === 'Third comment' && sortedComments[2].Content === 'Second comment') {
        //             console.log("Test passed: Comments are sorted correctly by date.");
        //         } else {
        //             console.error("Test failed: Comments are not sorted correctly by date.");
        //         }
        //     } catch (error) {
        //         console.error("Error during test:", error);
        //     } finally {
        //         // Close the connection after the test
        //         mongoose.connection.close();
        //     }
        // };

        // console.log("Sorted Comments:", testSortedComments());