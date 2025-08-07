import React from "react";
import { FiHome, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 shadow-md md:hidden">
      <div className="flex justify-around items-center h-16 text-sm text-gray-700">
        <Link to="/" className="flex flex-col items-center">
          <FiHome className="text-xl" />
          <span>Shop</span>
        </Link>
        <Link to="/account" className="flex flex-col items-center">
          <FiUser className="text-xl" />
          <span>Account</span>
        </Link>
        <Link to="/search" className="flex flex-col items-center">
          <FiSearch className="text-xl" />
          <span>Search</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center">
          <FiHeart className="text-xl" />
          <span>Wishlist</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
