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

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1609838463884-41e6f3d009f4?w=1200",
  },
  {
    image: "https://images.unsplash.com/photo-1531219432768-e8d62b58b0aa?w=1200",
  },
  {
    image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?w=1200",
  },
];

const Hero = () => {
  const bgSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image Slider */}
      <Slider {...bgSettings} className="absolute top-0 left-0 w-full h-full z-0">
        {heroSlides.map((slide, idx) => (
          <div key={idx}>
            <img
              src={slide.image}
              alt={`Slide ${idx}`}
              className="w-full h-[90vh] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 container mx-auto px-4 text-center pt-24 md:pt-32"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
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

        {/* Best Sellers Mini Slider */}
        <Slider
          {...{
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            pauseOnHover: false,
          }}
          className="max-w-md mx-auto mb-10 text-white"
        >
          {bestSellers.map((book, index) => (
            <div key={index} className="text-xl font-semibold">
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
      <div className="absolute w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl top-10 -left-20 animate-pulse z-10"></div>
    </section>
  );
};

export default Hero;







