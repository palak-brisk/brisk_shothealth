"use client";
import React, { useState } from "react";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";

const EmailTab = () => {
  const [form, setForm] = useState({
    senderEmail: "no-reply@Briskmd.com",
    displayName: "BriskMD Team",
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    domain: "https://Briskmd.com/",
    username: "no-reply@Briskmd.com",
    password: "",
    testEmail: "umang@bexcodeservices.com",
    useSSL: false,
    useDefaultCreds: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(form);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Email Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="block text-sm font-medium mb-1">
              Default from (sender) email address
            </Label>
            <Input
              type="email"
              name="senderEmail"
              value={form.senderEmail}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">
              Default from (sender) display name
            </Label>
            <Input
              type="text"
              name="displayName"
              value={form.displayName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">SMTP host</Label>
            <Input
              type="text"
              name="smtpHost"
              value={form.smtpHost}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">SMTP port</Label>
            <Input
              type="text"
              name="smtpPort"
              value={form.smtpPort}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">
              Domain name
            </Label>
            <Input
              type="text"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="flex items-center gap-6">
            <Label className="inline-flex items-center">
              <Checkbox
                checked={form.useSSL}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
                Use SSL
              </span>
            </Label>
            <Label className="inline-flex items-center">
              <Checkbox
                checked={form.useDefaultCreds}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400 ml-2">
                Use default credentials
              </span>
            </Label>
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">User name</Label>
            <Input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1">Password</Label>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        <div>
          <Label className="block text-sm font-medium mb-1">
            [Test email settings header]
          </Label>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <Input
              type="email"
              name="testEmail"
              value={form.testEmail}
              onChange={handleChange}
              className="flex-1 border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send Test Email
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailTab;
