const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    date: {
        type: Date
    },
    title: {
        type: String
    }
}, {
    timestamps: true
});

let Post = mongoose.model("Post", postSchema);
module.exports = Post;