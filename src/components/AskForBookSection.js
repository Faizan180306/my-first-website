import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const AskForBookSection = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a book title.");
      return;
    }

    toast.success("Book request submitted!");
    setTitle("");
    setDetails("");
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "ask-modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="ask-modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          <IoClose />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">
          Ask for a Book
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Book Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Indian Polity by M. Laxmikanth"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Author, edition, publisher, etc."
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AskForBookSection;



