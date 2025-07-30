import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const handleAddToCart = () => {
  toast.success("📚 Book added to cart!");
};

const handleRemoveFromCart = () => {
  toast.error("❌ Book removed from cart!");
};


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
