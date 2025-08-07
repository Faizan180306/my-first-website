import { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FeaturedBooks from "./pages/FeaturedBooks";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AllBooks from "./pages/AllBooks";
import AddBookPage from "./pages/AddBookPages";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AskForBookSection from "./components/AskForBookSection";
import BottomNav from './components/BottomNav';

function App() {
  const [loading, setLoading] = useState(false);
  const [showAskModal, setShowAskModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
  {loading && <Loader />}
  <Navbar onAskClick={() => setShowAskModal(true)} />

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
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/ask" element={<AskForBookSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  </AnimatePresence>

  {showAskModal && (
    <AskForBookSection onClose={() => setShowAskModal(false)} />
  )}

  <Footer />

  {/* ✅ Add BottomNav here */}
  <BottomNav />

  <Toaster position="top-right" reverseOrder={false} />
</>
  );
}

export default App;




