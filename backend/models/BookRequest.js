// models/BookRequest.js
import mongoose from 'mongoose';

const bookRequestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  bookName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const BookRequest = mongoose.model("BookRequest", bookRequestSchema);
export default BookRequest;
