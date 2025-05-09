import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { 
      email: email,
      password: password
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      loginData
    );
    if (response.status === 200 || response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <img src={logo} alt="logo" className="absolute top-0.5 left-4 w-56" />

      {/* Login Form */}
      <div className="bg-white shadow-lg rounded-lg pt-0.5 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold pt-3 text-gray-800 mb-6 text-center">
          Captain Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              What's your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="mt-1 bg-[#eeeeee] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="mt-1 bg-[#eeeeee] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Captain Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/captain-signup"
            className="text-indigo-600 hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
        <Link
          to="/login"
          className="w-full flex items-center justify-center mt-4 bg-green-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
