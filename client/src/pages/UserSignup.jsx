import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";
import axios from "axios";
import { UserContextData } from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const { user, setUser } = useContext(UserContextData);
  console.log(user); // Example usage to avoid the unused variable error
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = { 
      fullname: {
         firstname:firstName,
         lastname:lastName
         },
         email:email,
         password:password
      };
    

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      signupData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      Navigate("/home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      <img src={logo} alt="logo" className="absolute top-0.5 left-4 w-56" />

      {/* Signup Form */}
      <div className="bg-white mt-22 shadow-lg rounded-lg pt-0.5 p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold pt-3 text-gray-800 mb-6 text-center">
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              What's your name
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-1/2 bg-[#eeeeee] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-1/2 bg-[#eeeeee] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
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
              className="block text-lg font-medium text-gray-700"
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
            className="w-full bg-black cursor-pointer text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </p>
        <p className="text-[12px] text-justify leading-tight text-gray-600 mt-4">
          This site is protected by reCAPTCHA and the{" "}
          <span className="text-indigo-600 underline cursor-pointer">
            Google Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-indigo-600 underline cursor-pointer">
            Terms of Service
          </span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
