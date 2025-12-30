import type { Metadata } from "next";
import React from "react";
import AdminDashboard from "./admin/dashboard/page";
import PatientDashboard from "./patient/dashboard/page";
import NurseDashboard from "./provider/dashboard/page";

export const metadata: Metadata = {
  title: "BriskMD - Dashboard",
  description: "BriskMD - Dashboard",
};

export default function Home() {
  return (
    <div className="">
      <AdminDashboard />
      <PatientDashboard/>
      <NurseDashboard/>
    </div>
  );
}
