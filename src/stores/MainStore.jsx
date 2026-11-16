import { createContext, useState } from "react";

export const GlobalStore = createContext();

export default function MainStore({ children }) {
  // States
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData")),
  );

  const data = {
    token,
    setToken,
    userData,
    setUserData,
  };
  return <GlobalStore.Provider value={data}>{children}</GlobalStore.Provider>;
}
