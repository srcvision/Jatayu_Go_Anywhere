import React, { forwardRef } from "react";
import "remixicon/fonts/remixicon.css";
const CarCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="fixed z-10 bottom-0 left-0 right-0 bg-white px-3 py-8 translate-y-full shadow-lg rounded-t-lg"
    >
      <h5
        onClick={() => {
          props.setvehiclePanel(false);
        }}
        className="absolute top-2 right-2 text-black text-3xl cursor-pointer"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a Vehicle</h2>

      {/* Car 1 */}
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }} className="flex items-center justify-between mb-2 border-2 border-gray-200 active:border-black rounded-xl p-2">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1714472148/assets/95/a05538-918b-42d8-afe7-3c92325f2fd4/original/UberLux.png"
          alt="Car"
          className="h-12 w-24 object-cover rounded-md"
        />
        <div className="flex-1 px-4">
          <h5 className="font-bold text-lg flex items-center gap-2">
            JatayuGo
            <span className="text-black text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 4
            </span>
          </h5>
          <h6 className="text-sm text-gray-600">2 min away</h6>
          <p className="text-sm text-gray-500">Affordable, compact rides</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold text-green-600">₹193.59</h2>
        </div>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-black mb-2 rounded-xl p-2">
        {/* Car Image */}
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/motorcycle-4706686-3918060.png?f=webp"
          alt="Car"
          className="h-12 w-24 object-cover rounded-md"
        />

        {/* Car Details */}
        <div className="flex-1 px-4">
          <h5 className="font-bold text-lg flex items-center gap-2">
            JatayuBike
            <span className="text-black text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 1
            </span>
          </h5>
          <h6 className="text-sm text-gray-600">1 min away</h6>
          <p className="text-sm text-gray-500">Fast rides for solo travelers</p>
        </div>

        {/* Price */}
        <div className="text-right">
          <h2 className="text-xl font-bold text-green-600">₹89.79</h2>
        </div>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-black cursor-pointer mb-2 rounded-xl p-2">
        {/* Car Image */}
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="Car"
          className="h-12 w-24 object-cover rounded-md"
        />

        {/* Car Details */}
        <div className="flex-1 px-4">
          <h5 className="font-bold text-lg flex items-center gap-2">
            JatayuAuto
            <span className="text-black text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 3
            </span>
          </h5>

          <h6 className="text-sm text-gray-600 ">3 min away</h6>
          <p className="text-sm text-gray-500">
            Economical three-wheeler rides
          </p>
        </div>

        {/* Price */}
        <div className="text-right -ml-4">
          <h2 className="text-xl font-bold text-green-600">₹153.59</h2>
        </div>
      </div>
    </div>
  );
});

export default CarCard;
