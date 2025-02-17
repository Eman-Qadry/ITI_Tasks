const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/socialMedia", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("mongodb connected");
    } catch (error) {
        console.error("connection failed :", error);
        process.exit(1);
    }
};

module.exports = connectDB;
