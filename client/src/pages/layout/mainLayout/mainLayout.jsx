import Navbar from "../../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./mainLayout.scss";

// Layout for public and private pages
export const MainLayout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
