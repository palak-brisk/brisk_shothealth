"use client"
import { useState } from "react";

export default function ReusableTabs({ tabs, defaultIndex = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-all ${
              index === activeTab
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-gray-500 hover:text-primary-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
}
