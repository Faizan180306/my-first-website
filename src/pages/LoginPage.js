import React from "react";
import axios from "axios";
import AuthForm from "../components/AuthForm";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post("/api/auth/login", formData);
      alert(res.data.message);
      // Optionally store user info in localStorage
      // localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <AuthForm onSubmit={handleLogin} isLogin={true} />
    </div>
  );
};

export default LoginPage;

