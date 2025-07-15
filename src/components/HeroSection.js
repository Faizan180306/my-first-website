// Home.jsx (Hero section part)
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestSellers = [
  "MPSC Rajyaseva Mains Complete Guide",
  "UPSC Civil Services Prelims 2024",
  "Banking Awareness Complete Package",
  "Railway Group D Complete Study Material",
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to <span className="text-yellow-400">Amar Book Centre</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Find the best study materials for MPSC, UPSC, Banking, Railway, and more.
        </motion.p>

        <motion.p
          className="italic text-yellow-200 text-base md:text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          "पुस्तके म्हणजे ज्ञानाचे भांडार, यशाचा खरा आधार!"
        </motion.p>

        <Slider {...settings} className="max-w-md mx-auto mb-10">
          {bestSellers.map((book, index) => (
            <div key={index} className="text-white text-xl font-semibold">
              📚 {book}
            </div>
          ))}
        </Slider>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#categories"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition duration-300"
          >
            Explore Books
          </a>
          <a
            href="/featuredbooks"
            className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Shop Now
          </a>
        </motion.div>
      </motion.div>

      {/* Glowing Background Shape */}
      <div className="absolute w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl top-10 -left-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;





