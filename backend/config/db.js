// backend/config/db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Make sure this line is at the top

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

