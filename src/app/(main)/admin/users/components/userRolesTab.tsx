"use client";
import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { FaXmark, FaRegFloppyDisk } from "react-icons/fa6";
import Checkbox from "@/components/form/input/Checkbox";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";

export default function UserRolesTab() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  const [formData, setFormData] = useState({
    isAdmin: false,
    isNurse: false,
    isLicensedPracticalNursing: false,
    isPatient: false,
    isNursePractioner: false,
  });

  const handleIsAdminChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleIsNurseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleIsLicensedPracticalNursingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleIsPatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleIsNursePractionerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex items-center gap-2 mt-1">
          <Label className="inline-flex items-center">
            <Checkbox
              checked={formData.isAdmin}
              onChange={handleIsAdminChange}
              className="h-5 w-5 text-blue-600"
            />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
              Admin
            </span>
          </Label>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Label className="inline-flex items-center">
            <Checkbox
              checked={formData.isNurse}
              onChange={handleIsNurseChange}
              className="h-5 w-5 text-blue-600"
            />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
              Nurse
            </span>
          </Label>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Label className="inline-flex items-center">
            <Checkbox
              checked={formData.isLicensedPracticalNursing}
              onChange={handleIsLicensedPracticalNursingChange}
              className="h-5 w-5 text-blue-600"
            />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
              Licensed Practical Nursing
            </span>
          </Label>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Label className="inline-flex items-center">
            <Checkbox
              checked={formData.isPatient}
              onChange={handleIsPatientChange}
              className="h-5 w-5 text-blue-600"
            />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
              Patient
            </span>
          </Label>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Label className="inline-flex items-center">
            <Checkbox
              checked={formData.isNursePractioner}
              onChange={handleIsNursePractionerChange}
              className="h-5 w-5 text-blue-600"
            />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
              Nurse Practioner
            </span>
          </Label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          type="reset"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-1"
        >
          <FaXmark /> Cancel
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-1"
        >
          <FaRegFloppyDisk /> Save
        </Button>
      </div>
    </form>
  );
}
