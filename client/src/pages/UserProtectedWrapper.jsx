import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserContextData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContextData);
  const [isLoading, setIsLoading] = useState(true);
  console.log(user); // Example usage to avoid the unused variable error

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/login");
      });

    }, [token]);
    
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  return <div>{children}</div>;
};

export default UserProtectedWrapper;
