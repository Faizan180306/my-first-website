// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // ✅ CORS import
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors()); // ✅ Enable CORS before routes
app.use(express.json());

app.use("/api", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API routes
app.use('/api/books', bookRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
