import React from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🛒 Your Cart
        </motion.h2>

        {cartItems.length === 0 ? (
          <motion.div
            className="text-center text-gray-600 text-lg space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7620176-6129789.png"
              alt="Empty cart"
              className="w-64 mx-auto"
            />
            <p>Your cart is currently empty.</p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-32 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">by {item.author}</p>
                    <div className="text-green-600 font-bold text-lg mb-2">
                      ₹{item.price}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 flex items-center gap-1 hover:text-red-600 transition text-sm"
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Total: ₹{totalPrice}
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
                Proceed to Checkout
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Cart;


