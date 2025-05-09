import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen ">
        <Link to={"/home"} className="fixed h-10 w-10 right-2 top-2 rounded-full bg-white flex items-center justify-center  shadow-md">
        <i className="text-2xl ri-home-3-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGg-PTMejgNFnLJX0jiMhQH5CPFhZxPC159A_cfRP0RI1OrCdE0TNj77Ek1-OVPmijb8&usqp=CAU"
          alt="jatayu-map"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 px-3 py-2">
        <div className="flex items-center justify-between  bg-gray-50 rounded-xl p-4 shadow-sm mb-4">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png"
            alt="Selected Vehicle"
            className="h-16 w-24 object-cover rounded-md"
          />
          <div className="text-right">
            <h2 className="text-gray-700 font-semibold text-base">Saurav</h2>
            <p className="text-gray-800 text-lg font-bold">GJ01HA0806</p>
            <p className="text-gray-500 text-sm">Mahindra XUV700</p>
          </div>
        </div>
        {/* Dropoff */}
        <div className="flex items-start space-x-3 mb-4">
          <i className="ri-map-pin-3-fill text-2xl text-red-500"></i>
          <div>
            <p className="font-medium text-gray-700">Sardar Patel Stadium</p>
            <p className="text-sm text-gray-500">Ahmedabad</p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-start space-x-3 mb-4">
          <i className="ri-money-rupee-circle-fill text-2xl text-green-600"></i>
          <div>
            <p className="font-medium text-gray-700">₹193.50</p>
            <p className="text-sm text-gray-500">Payment via Cash or UPI</p>
          </div>
        </div>
        <button className="w-full mb-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-semibold shadow-lg transition duration-300">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
