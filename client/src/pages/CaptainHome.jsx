import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png";
import CaptainDeatil from "../components/CaptainDeatil";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [ridePopupPanel]);

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

  return (
    <div className="h-screen  bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 z-10 flex items-center justify-between w-full p-4">
        <img src={logo} alt="logo" className="w-36" />
        <Link
          to="/captain-login"
          className="h-10 w-10 rounded-full flex bg-amber-50 items-center justify-center shadow hover:bg-gray-200 transition"
        >
          <i className="text-2xl ri-logout-box-r-line text-gray-700"></i>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-3/5 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGg-PTMejgNFnLJX0jiMhQH5CPFhZxPC159A_cfRP0RI1OrCdE0TNj77Ek1-OVPmijb8&usqp=CAU"
          alt="jatayu-map"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDeatil />
      </div>
      <div>
        <RidePopUp
          ref={ridePopupPanelRef}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div>
        <ConfirmRidePopup
          ref={confirmRidePanelRef}
          setConfirmRidePanel={setConfirmRidePanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
