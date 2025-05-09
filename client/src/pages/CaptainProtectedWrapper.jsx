import React from "react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      Navigate("/captain-login");
    } 
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.error(error);
      localStorage.removeItem("token");
      Navigate("/captain-login");
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
