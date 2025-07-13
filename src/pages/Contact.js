import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form 
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md space-y-6 text-gray-700"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-start gap-4">
              <FiMapPin className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-bold">Address</h4>
                <p>Amar Book Centre, Pune, Maharashtra 411001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-bold">Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-2xl text-blue-600 mt-1" />
              <div>
                <h4 className="font-bold">Email</h4>
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
