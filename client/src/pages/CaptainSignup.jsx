import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupData = { fullName: { firstName, lastName }, email, password };
    console.log("User signup data:", signupData);

    // Example: Send data to backend
    // fetch("/api/captain-signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signupData),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Signup failed");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Captain signup successful:", data);
    //     // Perform further actions like redirecting
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     alert("Signup failed. Please try again.");
    //   });

    // Clear form fields
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
         Captain Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              What's our captain's name
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
              What's our captain's email
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
            Signup
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-indigo-600 hover:underline">
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
