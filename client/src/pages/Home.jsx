import React, { useState, useRef } from "react";
import logo from "../assets/jatayu-logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPenal";
import CarCard from "../components/CarCard";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [WaitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const vehicleFoundRef = useRef(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(false);
  const WaitingForDriverRef = useRef(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (WaitingForDriverPanel) {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [WaitingForDriverPanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={logo} alt="home" className="absolute top-0.5 left-4 w-56" />
      <div className="h-screen w-screen">
        <img
          src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif"
          alt="jatayu-map"
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-2 right-2 text-black text-3xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h3 className="text-2xl font-semibold">Find a trip</h3>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-12 w-1 top-[50%] left-10 bg-black rounded-full">
              <span className="absolute top-[-18px] left-[-8px] text-lg text-black">
                <i className="ri-circle-fill"></i>
              </span>
              <span className="absolute top-9 left-[-8px] text-lg text-black ">
                <i className="ri-square-fill"></i>
              </span>
            </div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>
      <CarCard
        ref={vehiclePanelRef}
        setvehiclePanel={setvehiclePanel}
        setConfirmRidePanel={setConfirmRidePanel}
      />
      <ConfirmRide
        ref={confirmRidePanelRef}
        setConfirmRidePanel={setConfirmRidePanel}
        setVehicleFound={setVehicleFound}
      />
      <LookingForDriver
        ref={vehicleFoundRef}
        setVehicleFound={setVehicleFound}
      />
      <WaitingForDriver
        ref={WaitingForDriverRef}
        setWaitingForDriverPanel={setWaitingForDriverPanel}
      />
    </div>
  );
};

export default Home;
