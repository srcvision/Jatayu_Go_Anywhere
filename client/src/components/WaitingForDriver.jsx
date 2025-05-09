import React, { forwardRef } from "react";

const WaitingForDriver = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white translate-y-full px-5 py-6 shadow-2xl rounded-t-3xl"
    >
      {/* Header: Searching animation */}
      <button
        onClick={() => props.setWaitingForDriverPanel(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition duration-300"
        aria-label="Close Panel"
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </button>

      {/* Driver Info */}
      <div className="flex items-center justify-between  bg-gray-50 rounded-xl p-4 shadow-sm mb-6">
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
      <div className="flex items-center justify-center mb-4">
        <div className="flex space-x-1 animate-pulse">
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
        <p className="ml-3 text-sm text-gray-500 font-medium">
          Looking for your driver...
        </p>
      </div>

      {/* Pickup Location */}
      <div className="flex items-start space-x-3 mb-4">
        <i className="ri-map-pin-2-fill text-2xl text-blue-500"></i>
        <div>
          <p className="text-gray-800 font-semibold">562/11-A</p>
          <p className="text-sm text-gray-500">Kankariya Lake, Ahmedabad</p>
        </div>
      </div>

      {/* Dropoff Location */}
      <div className="flex items-start space-x-3 mb-4">
        <i className="ri-map-pin-3-fill text-2xl text-red-500"></i>
        <div>
          <p className="text-gray-800 font-semibold">Sardar Patel Stadium</p>
          <p className="text-sm text-gray-500">Ahmedabad</p>
        </div>
      </div>

      {/* Fare Info */}
      <div className="flex items-start space-x-3">
        <i className="ri-money-rupee-circle-fill text-2xl text-green-600"></i>
        <div>
          <p className="text-gray-800 font-semibold">₹193.50</p>
          <p className="text-sm text-gray-500">Pay with Cash or UPI</p>
        </div>
      </div>
    </div>
  );
});

export default WaitingForDriver;
