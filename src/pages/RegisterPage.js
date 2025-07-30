import React from "react";
import axios from "axios";
import AuthForm from "../components/AuthForm";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const res = await axios.post("/api/auth/register", formData);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <AuthForm onSubmit={handleRegister} isLogin={false} />
    </div>
  );
};

export default RegisterPage;
