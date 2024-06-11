const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    type: {
        type: String
    },
    date: {
        type: Date
    }
});

//news Search == by date ,3ayz akher haga nazlet.
let News = mongoose.model("News", newsSchema);

module.exports = News;