import { useState } from "react";
import { createContext } from "react";
// import { fetchAllUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    avatar_url: "",
    name: "",
  });

  const isLoggedIn = !user.username;

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
