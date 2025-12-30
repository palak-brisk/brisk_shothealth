"use client";
import React, { useState } from "react";

const NurseDashboard = () => {
  const fields = [
    { label: "License", link: "State License" },
    { label: "Nursing License", required: true, link: "Nursing License" },
    { label: "Resume", required: true, link: "Resume" },
    { label: "Any other certificates", link: "Any other certificates" },
    {
      label: "Valid CPR Certification",
      required: true,
      link: "Valid CPR Certification",
    },
    { label: "TB Test Results", required: true, link: "TB Test Results" },
  ];
  const [files, setFiles] = useState({});

  const handleFileChange = (e, name) => {
    setFiles({ ...files, [name]: e.target.files[0] });
  };
  
  return (
    <div className="bg-white border rounded shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        My Documents -{" "}
        <span className="text-gray-600">Your Profile is Pending</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-sm">
        {fields.map((field, index) => (
          <div
            key={index}
            className="col-span-full sm:col-span-3 grid grid-cols-6 items-start py-2 border-b"
          >
            <label className="col-span-1 font-medium text-gray-700">
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="col-span-1 text-primary hover:underline cursor-pointer text-sm">
              {field.link}
            </div>

            <div className="col-span-2">
              <input
                type="file"
                onChange={(e) => handleFileChange(e, field.label)}
                className="block w-full text-sm text-gray-900 file:mr-4 file:py-1 file:px-3 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <p className="text-xs text-red-500 mt-1">
                We accept PDF, DOC, JPG, PNG files only
              </p>
            </div>

            <div className="col-span-1 flex justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded shadow">
                Upload document
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-start">
        <button className="bg-primary text-white font-semibold flex items-center px-4 py-2 rounded hover:bg-orange-600 transition">
          <svg
            className="w-4 h-4 mr-2 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Upload Documents
        </button>
      </div>
    </div>
  );
};
export default NurseDashboard;
