// src/layouts/DashboardLayout.jsx
import React from "react";
import Sidebar from "../Components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
