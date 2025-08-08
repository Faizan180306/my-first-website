import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (formData) => {
    try {
      const url = isLogin ? "/api/login" : "/api/register";
      const res = await axios.post(url, formData);
      toast.success(res.data.message || "Success!");
      // Add redirect/navigation here if needed
    } catch (err) {
      toast.error(err.response?.data?.error || "Authentication failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
        </h2>

        <AuthForm onSubmit={handleAuth} isLogin={isLogin} />

        <div className="mt-6 text-sm text-center text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 font-medium hover:underline transition duration-200"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginRegisterPage;

