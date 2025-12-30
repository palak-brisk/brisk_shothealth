"use client";
import React, { useState } from "react";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";

const TwillioSettingTab = () => {
  const [isSandbox, setIsSandbox] = useState(false);

  const [form, setForm] = useState({
    liveAccountSid: "",
    liveAuthToken: "",
    liveSender: "",
    sandboxAccountSid: "",
    sandboxAuthToken: "",
    sandboxSender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Twilio Settings</h1>
      <div className="space-y-4">
        {/* Toggle */}
        <Label className="inline-flex items-center space-x-2">
          <Checkbox
            className="form-checkbox"
            checked={isSandbox}
            onChange={() => setIsSandbox(!isSandbox)}
          />
          <span className="font-medium text-gray-700">Is Sandbox?</span>
        </Label>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Twilio Account */}
          <div className="border rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Live Twilio Account
            </div>
            <div className="p-4 space-y-4">
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Live AccountSid
                </Label>
                <Input
                  type="text"
                  name="liveAccountSid"
                  value={process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Live Auth Token
                </Label>
                <Input
                  type="text"
                  name="liveAuthToken"
                  value={process.env.NEXT_AUTH_TOKEN}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Live Sender Phone Number
                </Label>
                <Input
                  type="number"
                  name="liveSender"
                  value={""}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Sandbox Twilio Account */}
          <div className="border rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Sandbox Account
            </div>
            <div className="p-4 space-y-4">
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Sandbox AccountSid
                </Label>
                <Input
                  type="text"
                  name="sandboxAccountSid"
                  value={form.sandboxAccountSid}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Sandbox Auth Token
                </Label>
                <Input
                  type="text"
                  name="sandboxAuthToken"
                  value={form.sandboxAuthToken}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <Label className="block font-medium text-sm mb-1">
                  Sandbox Sender Phone Number
                </Label>
                <Input
                  type="text"
                  name="sandboxSender"
                  value={form.sandboxSender}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwillioSettingTab;
