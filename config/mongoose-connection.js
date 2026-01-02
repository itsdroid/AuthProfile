const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_URI="mongodb+srv://shubh7:wpu49aD2f1ss692o@authprofile.paqve2i.mongodb.net/Authprofile?retryWrites=true&w=majority&appName=authprofile";

mongoose.connect(MONGODB_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ MongoDB connection error:", error));

module.exports = mongoose.connection;
