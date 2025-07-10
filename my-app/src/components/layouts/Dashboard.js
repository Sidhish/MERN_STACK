import React from "react";
import { Outlet } from "react-router";
import Navbar from "../navbar";
import Footer from "../footer";

function Dashboard() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <Footer /> 
    </main>
  );
}

export default Dashboard;