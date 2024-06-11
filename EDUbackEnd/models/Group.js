const mongoose = require("mongoose");
const schema = mongoose.Schema;

const groupSchema = new schema({
    groupName: {
        type: String
    },
    groupId: {
        type: String
    },
    groupDescription: {
        type: String
    },
    users: [{
        type: String
    }],
    groupPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],
    groupModerators: [{
        type: String
    }]

});

let Group = mongoose.model("Group", groupSchema);

module.exports = Group;