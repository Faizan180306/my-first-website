import React from 'react';
import { motion } from 'framer-motion';

const BookCard = ({ book }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-700 font-medium mb-4">₹ {book.price}</p>
      <button className="mt-auto bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default BookCard;

