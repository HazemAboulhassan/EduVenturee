const mongoose = require("mongoose");
const News = require("../../models/News");
const connect = require("../../dbconnect");
const Comment = require("../../models/Comment");

// Connect to MongoDB
connect.then(() => {
    console.log("Database connected, And the search rslut is:");
    searchNews(); //ba3ml search awl lma a connect 3shan byhsal time out lma yb'a mfish user
}).catch((err) => {
    console.log("DB connection error in the news section");
});
//for testing.................
// Create a new news document
const newNews = new News({
    image: "example.jpg1",
    title: "Example News1",
    content: "This is an example news article.1",
    type: "general1",
    date: new Date(),
});
//for testing.........................
// Save the new news document to the database
newNews.save()
    .then((savedNews) => {
        console.log("News saved successfully:", savedNews);
    })
    .catch((error) => {
        console.error("Error saving news:", error);
    })

// Perform the search in news 
async function searchNews() {
    try {
        const news = await News.find({}).sort({ date: -1 });

        console.log(news);


        // Disconnect from MongoDB
        mongoose.disconnect();
    } catch (error) {
        console.error(error);
    }
}