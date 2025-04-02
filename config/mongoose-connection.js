const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_URI="mongodb+srv://shubham77:GGYPa9e4bcnrdHPj@authprofile.paqve2i.mongodb.net/?retryWrites=true&w=majority&appName=authprofile";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ MongoDB connection error:", error));

module.exports = mongoose.connection;
