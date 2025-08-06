import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";








const Navbar = () => {




  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) closeMenu();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <nav
      className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white shadow-md fixed w-full z-50"
      ref={menuRef}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Amar Book Centre Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-white">Amar Book Centre</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "FeaturedBooks", "Contact"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group font-medium hover:text-yellow-400 transition"
            >
              {item}
              <span className="absolute w-0 h-0.5 bg-yellow-400 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="relative group">
            <button onClick={toggleDropdown} className="font-medium hover:text-yellow-400 transition">
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
                  {["MPSC", "UPSC", "Novels", "Children"].map((cat, idx) => (
                    <Link
                      key={idx}
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

          {/* Ask for Book Button */}

          <Link to="/ask">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Ask for Book
            </button>
          </Link>




          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-yellow-400 transition duration-200"
            >
              <FiUser className="text-2xl" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                <Link
                  to="/auth"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setOpen(false)}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-indigo-950 md:hidden flex flex-col items-center text-white space-y-3 pb-4 animate-slideDown">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/featuredbooks" onClick={closeMenu}>FeaturedBooks</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        }
          <Link to="/profile" onClick={closeMenu}>My Profile</Link>
          <Link to="/orders" onClick={closeMenu}>My Orders</Link>
          <Link to="/logout" onClick={closeMenu}>Logout</Link>
          <Link to="/cart" onClick={closeMenu}>Cart</Link>
          <button onClick={toggleDropdown}>Categories ▾</button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col text-black w-40 bg-white rounded shadow-md z-50"
              >
                {["MPSC", "UPSC", "Novels", "Children"].map((cat, idx) => (
                  <Link
                    key={idx}
                    to={`/categories/${cat.toLowerCase()}`}
                    className="px-4 py-2 hover:bg-gray-200"
                    onClick={closeMenu}
                  >
                    {cat} Books
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

     

    </nav>
  );
};

export default Navbar;



