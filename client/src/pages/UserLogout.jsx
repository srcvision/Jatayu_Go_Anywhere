import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogout = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          Navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div></div>;
};

export default UserLogout;
