import React from "react";
import {
  FaRegClock,
  FaRegCircleXmark,
  FaRegCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";

const cardData = [
  {
    title: "Total Pending Request",
    count: 0,
    description: "Awaiting processing",
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    iconColor: "text-orange-500",
    icon: <FaRegClock/>,
  },
  {
    title: "Total Completed Request",
    count: 0,
    description: "Successfully completed",
    bg: "bg-green-50",
    border: "border-green-300",
    iconColor: "text-green-500",
    icon:<FaRegCircleCheck/>,
  },
  {
    title: "Total Accepted Request",
    count: 0,
    description: "Approved and scheduled",
    bg: "bg-blue-50",
    border: "border-blue-300",
    iconColor: "text-blue-500",
    icon: <FaCircleExclamation/>,
  },
  {
    title: "Total Cancelled Request",
    count: 0,
    description: "Cancelled by user or system",
    bg: "bg-red-50",
    border: "border-red-300",
    iconColor: "text-red-500",
    icon: <FaRegCircleXmark/>,
  },
];

const SummaryPage = () => {
  return (
    <div className="h-full bg-gray-50 p-6">
      <h2 className="text-lg font-semibold mb-4">Shot Request Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between border rounded-md p-4 shadow-sm ${card.bg} ${card.border}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-gray-700 font-medium">
                  {card.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {card.count}
                </p>
              </div>
              <span className={`text-2xl ${card.iconColor}`}>{card.icon}</span>
            </div>
            <p className="text-xs text-gray-600 mt-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;
