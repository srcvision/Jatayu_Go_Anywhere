import React from "react";

const LocationSearchPenal = (props) => {
  const locations = [
    "11, Ambikanagar part-2, Vejalpur, Near Jivarj park, Ahmedabad",
    "22, Shantinagar Society, Satellite, Near ISRO, Ahmedabad",
    "33, Greenfield Apartments, Prahladnagar, SG Highway, Ahmedabad",
    "44, Sunrise Residency, Bodakdev, Near Thaltej, Ahmedabad",
  ];

  return (
    <div className="cursor-pointer">
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setvehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={index}
          className="flex items-center border-2 p-3 border-gray-50 rounded-xl active:border-black justify-start gap-4 my-2"
        >
          <h2 className="text-xl bg-[#eeeeee] h-9 w-16 flex items-center justify-center rounded-full">
            <i className="ri ri-map-pin-fill"></i>
          </h2>
          <h4>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPenal;
