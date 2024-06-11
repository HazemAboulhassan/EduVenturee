const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://hazemaboulhassan8:MNzEkK3K2mcVL1Lb@chat-backend.gau8kzp.mongodb.net/?retryWrites=true&w=majority&appName=chat-backend";

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // Increase the timeout value to 30 seconds
});
module.exports = connect;