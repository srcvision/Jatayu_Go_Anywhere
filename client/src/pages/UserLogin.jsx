import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContextData } from "../context/UserContext";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContextData);
  const Navigate = useNavigate();
  console.log(user); // Example usage to avoid the unused variable error
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if(response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      Navigate("/home");
    }
    setEmail("");
    setPassword("");
    // Add your login logic here
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <img src={logo} alt="logo" className="absolute top-0.5 left-4 w-56" />

      {/* Login Form */}
      <div className="bg-white shadow-lg rounded-lg pt-0.5 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold pt-3 text-gray-800 mb-6 text-center">
          Welcome Back
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
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
        <Link
          to="/captain-login"
          className="w-full flex items-center justify-center mt-4 bg-indigo-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
