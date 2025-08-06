// src/components/AskForBookSection.js
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

  // Close if user clicks outside the modal content
  const handleBackdropClick = (e) => {
    if (e.target.id === "ask-modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="ask-modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white p-6 rounded-xl shadow-2xl w-full max-w-md"
      >
        {/* Close icon top-right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Ask for a Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Additional details (author, edition, etc.)"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
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


