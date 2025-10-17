const mongoose = require('mongoose');
require('dotenv').config();

const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = { initializeDatabase };
