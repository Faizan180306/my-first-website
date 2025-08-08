import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Top section */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-6">
                    <div className="flex items-center">
                        <img
                            src="/images/amar-book-logo.png"
                            className="rounded-xl h-12 w-auto"
                            alt="Amar Book Centre Logo"
                        />
                        <h2 className="text-2xl font-bold text-white ml-4">Amar Book Centre</h2>
                    </div>
                    <div className="flex space-x-4 md:space-x-6">
                        <a href="https://www.facebook.com/" className="hover:text-blue-600 transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="mailto:info@amarbookcentre.com" className="hover:text-white transition">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://www.instagram.com/" className="hover:text-fuchsia-600 transition">
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Amar%20Book%20Centre"
                            className="hover:text-green-500 transition"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>

                {/* Middle section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/categories" className="hover:text-white transition">Categories</a></li>
                            <li><a href="/featured" className="hover:text-white transition">Featured Books</a></li>
                            <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
                        </ul>
                    </div>

                    {/* Main Branch */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Main Branch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><FaPhone className="mt-1 mr-2" /> +91 9876543210</li>
                            <li className="flex items-start"><IoLocationOutline className="mt-1 mr-2" /> 123 Book Street, Pune 411001</li>
                        </ul>
                    </div>

                    {/* Secondary Branch */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Secondary Branch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><FaPhone className="mt-1 mr-2" /> +91 9123456789</li>
                            <li className="flex items-start"><IoLocationOutline className="mt-1 mr-2" /> 45 Library Road, Mumbai 400001</li>
                        </ul>
                    </div>

                    {/* Contact / Follow */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Reach Us</h3>
                        <p className="mb-2">Email: <a href="mailto:info@amarbookcentre.com" className="hover:text-white">info@amarbookcentre.com</a></p>
                        <p>Call: <a href="tel:+919876543210" className="hover:text-white">+91 9876543210</a></p>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Amar Book Centre. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
