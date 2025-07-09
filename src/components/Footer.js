import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className='flex items-center mb-6 mx-4 sm:mx-8 md:mx-12'>
                    <a><img src='/images/amar-book-logo.png' className='rounded-xl h-12 m-0 pr-0' alt="Amar Book Centre Logo" /></a>
                    <h2 className="text-xl font-bold gradient-text ml-4">Amar Book Centre</h2>
                </div>
                <div className="flex flex-wrap mx-2 justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:pl-6">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/categories" className="hover:text-white">Categories</a></li>
                            <li><a href="/featured" className="hover:text-white">Featured Books</a></li>
                            <li><a href="/cart" className="hover:text-white">Cart</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold ml-4 mb-1">Contact Us</h2>
                        <h3 className="text-xl font-bold mt-0">Main Branch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaPhone className="mr-2" /> +91 9876543210</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> 123 Book Street, Pune 411001</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 mt-8">
                        <h3 className="text-xl font-bold">Secondary Branch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center"><FaPhone className="mr-2" /> +91 9123456789</li>
                            <li className="flex items-center"><IoLocationOutline className="mr-2" /> 45 Library Road, Mumbai 400001</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/" className="hover:text-blue-800"><FaFacebook size={30} /></a>
                            <a href="mailto:info@amarbookcentre.com" className="hover:text-white"><FaEnvelope size={30} /></a>
                            <a href="https://www.instagram.com/" className="hover:text-fuchsia-700"><FaInstagram size={30} /></a>
                            <a href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20know%20more%20about%20Amar%20Book%20Centre"
                                className="hover:text-green-600"><FaWhatsapp size={30} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Amar Book Centre. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
