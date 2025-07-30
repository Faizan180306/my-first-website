import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const handleAddToCart = () => {
  toast.success("📚 Book added to cart!");
};

const handleRemoveFromCart = () => {
  toast.error("❌ Book removed from cart!");
};


const BookCard = ({ id, title, image }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform hover:-translate-y-1 cursor-pointer w-full max-w-xs"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-36">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

        <div className="flex justify-between items-center mt-4">
          <Link to={`/book/${id}`}>
            <button className="px-4 py-1 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              View Details
            </button>
          </Link>
          <button className="px-3 py-1 text-sm bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">
            🛒 Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;


