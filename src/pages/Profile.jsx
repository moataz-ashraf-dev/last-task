import { useContext, useEffect } from "react";
import { GlobalStore } from "../stores/MainStore";
import { useNavigate } from "react-router";

export default function Profile() {
  // Hooks
  const { token } = useContext(GlobalStore);
  const navigate = useNavigate();

  // Protected Route
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <div>Profile</div>;
}
