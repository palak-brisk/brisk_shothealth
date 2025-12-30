import React from "react";
import Tabs from "@/components/ui/tabs/Tabs";
import Button from "@/components/ui/button/Button";
import GeneralSettingTab from "./components/generalSettingTab";
import PlatformChargesTab from "./components/platformChargesTab";
import EmailTab from "./components/emailTab";
import TwillioSettingTab from "./components/twillioSettingTab";
import PaymentGatewayTab from "./components/paymentGatewayTab";

const Settings = () => {
  const tabs = [
    {
      label: "General Setting",
      content: <GeneralSettingTab />,
    },
    {
      label: "Platform Charges",
      content: <PlatformChargesTab />,
    },
    {
      label: "Email(SMTP)",
      content: <EmailTab />,
    },
    {
      label: "Twillio Settings",
      content: <TwillioSettingTab />,
    },
    {
      label: "Payment Gateway",
      content: <PaymentGatewayTab />,
    },
  ];

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="p-6">
          {/* Title + Button aligned */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">
              Show and change application settings.
            </h1>
            <Button className="px-4 py-2 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded">
              Save All
            </Button>
          </div>

          {/* Tabs */}
          <Tabs tabs={tabs} defaultIndex={0} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
