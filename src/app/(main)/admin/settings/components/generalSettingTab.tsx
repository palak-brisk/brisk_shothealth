import React from "react";
import Input from "@/components/form/input/InputField";

const GeneralSettingTab = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        System Admin Email
      </label>
      <Input
        type="email"
        placeholder="Enter System Admin Email"
        value={"info@briskmd.com"}
        className="w-full px-4 py-1 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default GeneralSettingTab;
