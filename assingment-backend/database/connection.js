const mongoose = require("mongoose");

const connectDB = async () => {
    return await mongoose.connect("mongodb://localhost:27017/students").then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connectDB;