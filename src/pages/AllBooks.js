import React from "react";
import { useCart } from "../context/CartContext";

const allBooks = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: `Sample Book ${index + 1}`,
  author: `Author ${index + 1}`,
  price: 500 + index * 20,
  image: `https://source.unsplash.com/300x400/?book,education,${index}`,
  category: index % 2 === 0 ? "MPSC" : "UPSC",
}));

const AllBooks = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          All Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                <p className="text-green-600 font-semibold mb-4">₹{book.price}</p>
                <button
                  onClick={() => addToCart(book)}
                  className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
