import {
  FaHouse,
  FaUserGear,
  FaFile,
  FaWallet,
  FaSackDollar,
  FaClipboardList,
  FaBuildingColumns,
} from "react-icons/fa6";

export const nurseNavigation = [
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/nurse/dashboard",
  },
  {
    icon: <FaUserGear />,
    name: "Manage Profile",
    path: "/general/manageProfile",
  },
  {
    icon: <FaBuildingColumns />,
    name: "My Bank Details",
    path: "/nurse/bankDetails",
  },
  {
    icon: <FaFile />,
    name: "My Document",
    path: "/nurse/myDoc",
  },
  {
    icon: <FaWallet />,
    name: "My Wallet History",
    path: "/nurse/walletHistory",
  },
  {
    icon: <FaSackDollar />,
    name: "Withdraw Request",
    path: "/nurse/withdrawReq",
  },
  {
    icon: <FaClipboardList />,
    name: "Service Request",
    subItems: [
      {
        name: "Manage Service Request",
        path: "/nurse/serviceReq/manageServiceReq",
        pro: false,
      },
      {
        name: "Assigned Request",
        path: "/nurse/serviceReq/assignedReq",
        pro: false,
      },
      {
        name: "Completed Request",
        path: "/nurse/serviceReq/completedReq",
        pro: false,
      },
    ],
  },
];
