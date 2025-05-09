import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";
import { CaptainDataContext } from "../context/CaptainContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate(); // Example usage to avoid the unused variable error

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );
      if (response.status === 201 || response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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

          {/* Vehicle Details Section */}
          <div className="mb-6 border-t border-gray-300 pt-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Vehicle Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vehicle Color */}
              <div>
                <label
                  htmlFor="vehicleColor"
                  className="block text-lg font-medium text-gray-700"
                >
                  Vehicle Color
                </label>
                <input
                  type="text"
                  id="vehicleColor"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  placeholder="Vehicle Color"
                  className="mt-1 bg-[#eeeeee] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Vehicle Plate */}
              <div>
                <label
                  htmlFor="vehiclePlate"
                  className="block text-lg font-medium text-gray-700"
                >
                  Vehicle Plate
                </label>
                <input
                  type="text"
                  id="vehiclePlate"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  placeholder="Vehicle Plate"
                  className="mt-1 bg-[#eeeeee] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Vehicle Capacity */}
              <div>
                <label
                  htmlFor="vehicleCapacity"
                  className="block text-lg font-medium text-gray-700"
                >
                  Vehicle Capacity
                </label>
                <input
                  type="number"
                  id="vehicleCapacity"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  placeholder="Vehicle Capacity"
                  className="mt-1 bg-[#eeeeee] block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Vehicle Type */}
              <div className="mb-4">
                <label
                  htmlFor="vehicleType"
                  className="block text-lg font-medium text-gray-800 mb-2"
                >
                  Vehicle Type
                </label>
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-[#eeeeee] border border-gray-300 rounded-lg px-4 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="" disabled>
                    -- Select Vehicle Type --
                  </option>
                  <option value="car">🚗 Car</option>
                  <option value="auto">🛺 Auto</option>
                  <option value="motorcycle">🏍️ Motorcycle</option>
                </select>

                {vehicleType && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected Vehicle:{" "}
                    <span className="font-medium">{vehicleType}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Create Captain Account
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
