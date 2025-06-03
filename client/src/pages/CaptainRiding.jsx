import React,{useState,useRef} from "react";
import logo from "../assets/jatayu-logo.png";
import FinishRide from "../components/FinishRide";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null)

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [finishRidePanel]);
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
      <div className="h-4/5 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGg-PTMejgNFnLJX0jiMhQH5CPFhZxPC159A_cfRP0RI1OrCdE0TNj77Ek1-OVPmijb8&usqp=CAU"
          alt="jatayu-map"
          className="h-full w-full object-cover"
        />
      </div>

      <div
      onClick={() => {
        setFinishRidePanel(true);
    }}
      className="h-1/4 p-6 relative flex items-center justify-between bg-black shadow-md ">
        <h5
          onClick={() => {}}
          className="p-1 text-center absolute top-0 w-[90%] "
          aria-label="Close Panel"
        >
          <i className="ri-arrow-up-wide-fill text-3xl text-gray-500 cursor-pointer "></i>
        </h5>
        <h4 className="font-medium text-lg text-white pt-2">4 KM away</h4>
        <button className="w-1/2 flex justify-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300">
          Complete ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed bottom-0 z-10  bg-white w-full translate-y-full rounded-t-3xl shadow-lg"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
