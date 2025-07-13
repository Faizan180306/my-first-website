import React from "react";
import { useCart } from "../context/CartContext";

const featuredBooks = [
  {
    id: 1,
    title: "MPSC Rajyaseva Mains Complete Guide",
    author: "Dr. Prakash Patil",
    price: 850,
    originalPrice: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    category: "MPSC",
    bestseller: true,
  },
  {
    id: 2,
    title: "UPSC Civil Services Prelims 2024",
    author: "Arihant Publications",
    price: 1250,
    originalPrice: 1500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    category: "UPSC",
    bestseller: true,
  },
  {
    id: 3,
    title: "Banking Awareness Complete Package",
    author: "Kiran Publications",
    price: 650,
    originalPrice: 800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    category: "Banking",
    bestseller: false,
  },
  {
    id: 4,
    title: "Railway Group D Complete Study Material",
    author: "Youth Competition Times",
    price: 750,
    originalPrice: 950,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    category: "Railway",
    bestseller: false,
  },
];

const FeaturedBooks = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (book, e) => {
    addToCart(book);
    e.target.classList.add("animate-pulse");
    setTimeout(() => e.target.classList.remove("animate-pulse"), 500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked bestsellers to accelerate your exam preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {book.bestseller && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                    Bestseller
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                  {book.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-green-600 font-semibold text-lg">
                    ₹{book.price}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ₹{book.originalPrice}
                    </span>
                  </div>
                  <div className="text-yellow-500 text-sm font-medium flex items-center">
                    ★ {book.rating}
                  </div>
                </div>

                <button
                  onClick={(e) => handleAddToCart(book, e)}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded transition duration-300">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
