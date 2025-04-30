import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/jatayu-logo.png"
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen flex pt-1 justify-between flex-col w-full">
        <img src={logo} className="w-56 ml-4" alt="" />
        <div className="bg-white pb-7 py-6 px-5">
          <h2 className="font-bold text-2xl">Get Started With Jatayu</h2>
          <Link
            to="/login"
            className="flex items-center justify-center font-bold text-white py-2 w-full rounded bg-black mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
