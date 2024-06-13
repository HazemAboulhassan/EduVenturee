const mongoose = require("mongoose");
const News = require("../models/News");
const connect = require("../dbconnect");

// Connect to MongoDB
connect.then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("DB connection error:", err);
});

// Function to search news and sort by date
const searchNews = async() => {
    try {
        const news = await News.find({}).sort({ date: -1 });
        return news;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

module.exports = {
    searchNews
};