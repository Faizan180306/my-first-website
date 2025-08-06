// routes/requestRoutes.js
import express from 'express';
import BookRequest from '../models/BookRequest.js';

const router = express.Router();

// POST /api/request-book
router.post("/request-book", async (req, res) => {
  try {
    const { fullName, phone, bookName } = req.body;

    const newRequest = new BookRequest({ fullName, phone, bookName });
    await newRequest.save();

    res.status(201).json({ message: "Request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

export default router;
