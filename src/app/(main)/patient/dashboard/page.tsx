import React, { useState } from "react";
import ServiceRequestForm from "./components/ServiceRequestForm";
import ShotRequestSummary from "./components/SummayCard";

const PatientDashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 xl:col-span-7">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
          <div className="container mx-auto p-4">
            <ShotRequestSummary />
          </div>
        </div>
      </div>

      <div className="col-span-12 xl:col-span-5">
        <ServiceRequestForm />
      </div>
    </div>
  );
};

export default PatientDashboard;
