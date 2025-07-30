// App.js


import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AddBookPage from './pages/AddBookPages';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FeaturedBooks from "./pages/FeaturedBooks";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AllBooks from "./pages/AllBooks";
import AddBookForm from "./components/AddBookForm";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";




function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400); // fake delay
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />

      {/* ✅ Add this line for toast support */}
      <Toaster position="top-right" reverseOrder={false} />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/featuredbooks" element={<FeaturedBooks />} />
            <Route path="/allbooks" element={<AllBooks />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />


            <Route path="/auth" element={<LoginRegisterPage />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/add-book" element={<AddBookPage />} />
            <Route path="/add-book" element={<AddBookForm />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}
export default App;





