const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

let isConnected = false; 

const initializeDatabase = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    const connection = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    if (connection) {
      isConnected = true;
      console.log('Connected Successfully');
    }
  } catch (error) {
    console.log('Connection Failed', error);
    throw error;
  }
};

module.exports = { initializeDatabase };