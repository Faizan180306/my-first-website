import React from "react";
import { FiHome, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Shop", icon: FiHome },
    { to: "/account", label: "Account", icon: FiUser },
    { to: "/search", label: "Search", icon: FiSearch },
    { to: "/wishlist", label: "Wishlist", icon: FiHeart },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 shadow-md md:hidden">
      <div className="flex justify-around items-center h-16 text-xs text-gray-600">
        {navItems.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to;

          return (
            <Link
              key={label}
              to={to}
              className={`flex flex-col items-center transition-all duration-200 ease-in-out ${
                isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-400"
              }`}
            >
              <Icon className={`text-2xl mb-1 ${isActive ? "scale-110" : ""}`} />
              <span className="text-[11px]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
