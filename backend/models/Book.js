import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String },
  price: { type: Number },
  description: { type: String },
});


const Book = mongoose.model('Book', bookSchema);
export default Book;
