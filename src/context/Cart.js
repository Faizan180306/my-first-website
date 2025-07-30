import React from 'react';
import { useCart } from '../context/CartContext';
import toast from "react-hot-toast";

const handleAddToCart = () => {
  toast.success("📚 Book added to cart!");
};

const handleRemoveFromCart = () => {
  toast.error("❌ Book removed from cart!");
};


const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">by {item.author}</p>
                  <p className="text-green-600 font-bold mt-2">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
