"use client";
import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";
import Button from "@/components/ui/button/Button";
import { FaXmark,FaRegFloppyDisk  } from "react-icons/fa6";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";

export default function UserDetailsTab() {
  const { isOpen, openModal, closeModal } = useModal();
  const [formData, setFormData] = useState({
    username: "umang@bexcodeservices.com",
    firstName: "",
    lastName: "",
    email: "",
    password: "********",
    confirmPassword: "",
    isActive: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Username */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          User name <span className="text-red-600">*</span>
        </Label>
        <Input
          name="username"
          value={formData.username}
          disabled
          className="w-full bg-blue-50 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* First Name */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          First Name <span className="text-red-600">*</span>
        </Label>
        <Input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Last Name */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          Last Name <span className="text-red-600">*</span>
        </Label>
        <Input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Email */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          Email <span className="text-red-600">*</span>
        </Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Password */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          Password <span className="text-red-600">*</span>
        </Label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full bg-blue-50 border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <Label className="block text-gray-700 font-medium mb-1">
          Confirm password <span className="text-red-600">*</span>
        </Label>
        <Input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* Is Active Checkbox */}
      <div className="flex items-center gap-2 mt-1">
        <Label className="inline-flex items-center">
          <Checkbox
            checked={formData.isActive}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600"
          />
          <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
            Is active
          </span>
        </Label>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <Button
          type="reset"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-1"
        >
          <FaXmark/>Cancel
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-1"
        >
         <FaRegFloppyDisk/> Save
        </Button>
      </div>
    </form>
  );
}
