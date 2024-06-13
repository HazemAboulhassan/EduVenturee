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