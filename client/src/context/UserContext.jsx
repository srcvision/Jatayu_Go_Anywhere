import React, { useState } from "react";

// UserContextData.js
import { createContext } from 'react';

export const UserContextData = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName:{
      firstName: "",
      lastName: "",
    }
  });

  console.log(user); // Example usage to avoid the unused variable error
  return (
    <div>
      <UserContextData.Provider value={{ user, setUser }}>
        {children}
      </UserContextData.Provider>
    </div>
  );
};

export default UserContext;
