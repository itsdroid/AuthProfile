const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_URI=process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ MongoDB connection error: ", error));

module.exports = mongoose.connection;
