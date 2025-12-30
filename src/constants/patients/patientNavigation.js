import { FaHouse, FaUserGear, FaClipboardList } from "react-icons/fa6";

export const patientNavigation = [
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/patient/dashboard",
  },
  {
    icon: <FaUserGear />,
    name: "Manage Profile",
    path: "/general/manageProfile",
  },
  {
    icon: <FaClipboardList />,
    name: "My Service Request",
    subItems: [
      {
        name: "Pending Request",
        path: "/patient/serviceReq/pendingReq",
        pro: false,
      },
      {
        name: "Assigned Request",
        path: "/patient/serviceReq/assignedReq",
        pro: false,
      },
      {
        name: "Cancelled/Expired Request",
        path: "/patient/serviceReq/cancelledReq",
        pro: false,
      },

      {
        name: "Completed Request",
        path: "/patient/serviceReq/completedReq",
        pro: false,
      },
    ],
  },
];
