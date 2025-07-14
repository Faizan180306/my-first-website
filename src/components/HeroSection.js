import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-32 overflow-hidden">
    <div className="container mx-auto px-4 text-center animate-fadeSlideDown">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Welcome to <span className="text-yellow-400">Amar Book Centre</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white">
        Find the best study materials for MPSC, UPSC, Banking, Railway, and more.
      </p>

      <p className="italic text-yellow-200 text-base md:text-lg mb-8">
        "पुस्तके म्हणजे ज्ञानाचे भांडार, यशाचा खरा आधार!"
      </p>

      <div className="flex justify-center space-x-4">
        <a
          href="#categories"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300"
        >
          Explore Books
        </a>

        <Link
          to="/featuredbooks"
          className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;



