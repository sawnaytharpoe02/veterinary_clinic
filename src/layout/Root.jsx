import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="w-full flex flex-col bg-mainBG h-screen">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
