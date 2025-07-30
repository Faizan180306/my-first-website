import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

import { toast } from "react-toastify";
import axios from "axios";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (formData) => {
    try {
      const url = isLogin ? "/api/login" : "/api/register";
      const res = await axios.post(url, formData);
      toast.success(res.data.message || "Success!");
      // You can navigate to homepage or dashboard here
    } catch (err) {
      toast.error(err.response?.data?.error || "Authentication failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>
        <AuthForm onSubmit={handleAuth} isLogin={isLogin} />
        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-2 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
