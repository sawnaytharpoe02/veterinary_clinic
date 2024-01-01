import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-mainBG">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
