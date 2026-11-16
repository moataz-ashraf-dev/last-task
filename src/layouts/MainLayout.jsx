import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="grow w-170 max-w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
