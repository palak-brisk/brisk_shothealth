"use client";
import React, { useState } from "react";
import { FaRegClock, FaRegFileLines } from "react-icons/fa6";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import TextArea from "@/components/form/input/TextArea";
import DatePicker from "@/components/form/date-picker";

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    patientLocation: "",
    shotLocation: "",
    serviceDate: "",
    serviceTime: "",
    requestType: "",
    servicePreference: "",
    pickupFromPharmacy: false,
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-3 mb-8">
        <FaRegFileLines className="text-primary-600 text-3xl" />
        <h1 className="font-semibold text-gray-900">
          Create New Service Request
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="patientLocation"
          >
            Patient Location *
          </Label>
          <select
            id="patientLocation"
            name="patientLocation"
            value={formData.patientLocation}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Patient Location</option>
            <option value="home">Home</option>
            <option value="clinic">Clinic</option>
            <option value="hospital">Hospital</option>
          </select>
        </div>

        <div className="mb-4">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="shotLocation"
          >
            Shot Location
          </Label>
          <select
            id="shotLocation"
            name="shotLocation"
            value={formData.shotLocation}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Shot Location</option>
            <option value="left_arm">Left Arm</option>
            <option value="right_arm">Right Arm</option>
            <option value="thigh">Thigh</option>
          </select>
        </div>

        <div className="mb-4">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="serviceDate"
          >
            Service Schedule Date *
          </Label>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>

        <div className="mb-4">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="serviceTime"
          >
            Service Schedule Time *
          </Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <FaRegClock />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="requestType"
          >
            Service Request Type *
          </Label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Service Request Type</option>
            <option value="vaccination">Vaccination</option>
            <option value="blood_test">Blood Test</option>
            <option value="checkup">Checkup</option>
          </select>
        </div>

        <div className="mb-6">
          <Label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="additionalNotes"
          >
            Add any additional notes...
          </Label>
          <TextArea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any additional information..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
