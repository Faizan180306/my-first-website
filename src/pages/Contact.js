import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-800 mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="bg-white/40 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-2xl space-y-6 transition-all duration-300"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-white/60 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-white/60 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-5 py-3 bg-white/60 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Send Message 🚀
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="bg-white/40 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-2xl space-y-8 text-gray-800"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-5">
              <FiMapPin className="text-3xl text-blue-600 animate-pulse" />
              <div>
                <h4 className="font-bold text-lg">Address</h4>
                <p>Amar Book Centre, Pune, Maharashtra 411001</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FiPhone className="text-3xl text-blue-600 animate-pulse" />
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FiMail className="text-3xl text-blue-600 animate-pulse" />
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p>amarbooks@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

