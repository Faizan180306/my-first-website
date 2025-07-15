import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import FeaturedBooks from "./FeaturedBooks";
import BookSlider from "../components/BookSlider";




const Home = () => {
  const bestsellers = [
      "MPSC Rajyaseva Guide",
      "UPSC Civil Services Prelims 2024",
      "Banking Awareness 2024",
      "Railway Group D Practice Set"
      ];
  return (
    <div>
      {/* ✨ Enhanced Hero Section with Marathi slogan and animation */}
      

      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-32 overflow-hidden">
        {/* Floating background circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-ping"></div>

        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            Welcome to <span className="text-yellow-400">Amar Book Centre</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white"
          >
            Find the best study materials for MPSC, UPSC, Banking, Railway, and more.
          </motion.p>

          {/* Marathi Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="italic text-yellow-200 text-base md:text-lg mb-8"
          >
            "पुस्तके म्हणजे ज्ञानाचे भांडार, यशाचा खरा आधार!"
          </motion.p>

          {/* Animated Bestseller Slider */}
          <motion.div
            className="text-sm md:text-base text-yellow-300 font-mono mb-6"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <span className="inline-block whitespace-nowrap">
              {bestsellers.map((item, i) => (
                <span key={i} className="mx-6">🔥 {item}</span>
              ))}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
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
          </motion.div>
        </div>
      </section>
      <BookSlider />

      







      {/* Categories Section */}
      <Categories />

      {/* Featured Books Section */}
      <div className="my-16">
        <FeaturedBooks />
      </div>

      {/* Footer (Optional) */}
      <footer className="text-center py-6 bg-gray-100 text-gray-700 mt-10">
        © {new Date().getFullYear()} Amar Book Centre. All rights reserved.
      </footer>
      {/* Floating WhatsApp Help Button */}
      <a
        href="https://wa.me/9359176071"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M12.003 2.002C6.478 2.002 2 6.48 2 12.003c0 1.9.475 3.69 1.31 5.263L2 22l4.837-1.287A9.954 9.954 0 0 0 12.003 22C17.527 22 22 17.522 22 12.003S17.527 2.002 12.003 2.002zM12 20.003a7.937 7.937 0 0 1-4.198-1.212l-.3-.185-2.865.762.765-2.792-.194-.319A7.954 7.954 0 1 1 20 12c0 4.412-3.589 8.003-8 8.003zm4.462-5.944c-.245-.122-1.455-.718-1.68-.798-.224-.081-.388-.122-.553.122-.163.245-.635.798-.78.963-.143.163-.285.184-.53.061-.245-.122-1.035-.381-1.974-1.215-.73-.65-1.223-1.454-1.366-1.699-.143-.244-.015-.376.107-.498.112-.111.245-.285.367-.428.123-.143.163-.245.245-.408.081-.163.041-.306-.02-.428-.061-.122-.552-1.33-.757-1.823-.2-.48-.404-.418-.552-.427l-.469-.01c-.163 0-.428.061-.653.306s-.857.837-.857 2.04 1.018 2.371 1.16 2.535c.143.163 2.002 3.05 4.855 4.277.68.293 1.21.468 1.624.598.682.217 1.303.186 1.795.113.547-.082 1.455-.595 1.66-1.17.204-.571.204-1.06.143-1.17-.06-.102-.224-.163-.469-.285z" />
        </svg>
      </a>


    </div>
  );
};

export default Home;






