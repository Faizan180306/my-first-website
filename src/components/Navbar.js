import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setProfileOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleProfileDropdown = () => setProfileOpen(!profileOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={menuRef}
      className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Amar Read Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">Amar Read</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "FeaturedBooks", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group font-medium hover:text-yellow-400 transition"
            >
              {item}
              <span className="absolute w-0 h-0.5 bg-yellow-400 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-medium hover:text-yellow-400 transition"
            >
              Categories ▾
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50"
                >
                  {["MPSC", "UPSC", "Novels", "Children"].map((cat) => (
                    <Link
                      key={cat}
                      to={`/categories/${cat.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      {cat} Books
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Ask for Book */}
          <Link to="/ask">
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Ask for Book
            </button>
          </Link>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="hover:text-yellow-400 transition"
            >
              <FiUser className="text-2xl" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 shadow-lg rounded z-50">
                <Link
                  to="/auth"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="pl-8 pr-3 py-1 rounded bg-white text-black focus:outline-none w-48"
            />
            <FiSearch className="absolute top-2 left-2 text-gray-500" />
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden flex flex-col items-center bg-indigo-950 text-white px-4 py-4 space-y-4"
        >
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/featuredbooks" onClick={closeMenu}>FeaturedBooks</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>

          <button onClick={toggleDropdown}>Categories ▾</button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="w-full text-black bg-white rounded shadow-md"
              >
                {["MPSC", "UPSC", "Novels", "Children"].map((cat) => (
                  <Link
                    key={cat}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    {cat} Books
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            to="/ask"
            className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700"
            onClick={closeMenu}
          >
            Ask for Book
          </Link>

          <Link to="/auth" onClick={closeMenu}>Login</Link>
          <Link to="/auth" onClick={closeMenu}>Register</Link>
          <Link to="/cart" onClick={closeMenu}>Cart</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;



