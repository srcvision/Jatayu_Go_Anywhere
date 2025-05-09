import React, { forwardRef } from "react";

const LookingForDriver = forwardRef((props,ref) => {
  return (
    <div
    ref={ref} 
    className="fixed z-10 bottom-0 left-0 right-0 bg-white px-3 py-8 translate-y-full shadow-lg rounded-t-lg">
      {/* Title */}
      <button
        onClick={() => props.setVehicleFound(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition duration-300"
        aria-label="Close Panel"
      >
        <i className="ri-arrow-down-wide-line text-3xl"></i>
      </button>
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Looking for a Driver
      </h2>

      {/* Car Image */}
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png"
          alt="Selected Vehicle"
          className="h-40 item-center mx-auto object-cover"
        />
      </div>

      {/* Pickup */}
      <div className="flex items-start space-x-3 mb-4">
        <i className="ri-map-pin-2-fill text-2xl text-blue-500"></i>
        <div>
          <p className="font-medium text-gray-700">562/11-A</p>
          <p className="text-sm text-gray-500">Kankariya Lake, Ahmedabad</p>
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
      <div className="flex items-start space-x-3 mb-6">
        <i className="ri-money-rupee-circle-fill text-2xl text-green-600"></i>
        <div>
          <p className="font-medium text-gray-700">₹193.50</p>
          <p className="text-sm text-gray-500">Payment via Cash or UPI</p>
        </div>
      </div>
    </div>
  );
});

export default LookingForDriver;
