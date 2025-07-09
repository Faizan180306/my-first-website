import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gradient-to-r from-black via-blue-900 to-blue-700 shadow-lg fixed left-0 w-full z-50 px-2" ref={menuRef}>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex justify-between items-center py-2">
                    <div className='flex items-center'>
                        <img src='/images/amar-book-logo.png' className='h-16' alt="Amar Book Centre Logo" />
                        <span className="text-white text-xl font-bold ml-2">Amar Book Centre</span>
                    </div>
                    <div className="hidden text-white text-lg md:flex space-x-8">
                        <Link to="/" className="font-bold hover:text-gray-300">Home</Link>
                        <Link to="/categories" className="font-bold hover:text-gray-300">Categories</Link>
                        <Link to="/featured" className="font-bold hover:text-gray-300">Featured Books</Link>
                        <Link to="/cart" className="font-bold hover:text-gray-300">Cart</Link>
                        <Link to="/contact" className="font-bold hover:text-gray-300">Contact</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-gray-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden text-white">
                        <Link to="/" className="font-semibold block px-4 py-1 hover:text-gray-300" onClick={closeMenu}>Home</Link>
                        <Link to="/categories" className="font-semibold block px-4 py-1 hover:text-gray-300" onClick={closeMenu}>Categories</Link>
                        <Link to="/featured" className="font-semibold block px-4 py-1 hover:text-gray-300" onClick={closeMenu}>Featured Books</Link>
                        <Link to="/cart" className="font-semibold block px-4 py-1 hover:text-gray-300" onClick={closeMenu}>Cart</Link>
                        <Link to="/contact" className="font-semibold block px-4 py-1 hover:text-gray-300" onClick={closeMenu}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
