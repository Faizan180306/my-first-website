// routes/bookRoutes.js
import express from 'express';
import Book from '../models/Book.js';




const router = express.Router();

// POST: Add new book
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    console.error("❌ Error in POST /api/books:", error.message);
    res.status(500).json({ message: 'Failed to add book', error: error.message });
  }
});

// GET: Fetch all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books' });
  }
});

export default router;

