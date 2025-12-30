import {
  FaHouse,
  FaUserGear,
  FaUserNurse,
  FaUserInjured,
  FaClipboardList,
  FaEnvelope,
  FaGear,
  FaUsers,
} from "react-icons/fa6";

export const adminNavigation = [
  {
    icon: <FaHouse />,
    name: "Home",
    path: "/admin/dashboard",
  },
  {
    icon: <FaUserGear />,
    name: "Manage Profile",
    path: "/general/manageProfile",
  },
  {
    icon: <FaUsers />,
    name: "Users",
    path: "/admin/users",
  },
  {
    icon: <FaGear />,
    name: "Settings",
    path: "/admin/settings",
  },
  {
    icon: <FaEnvelope />,
    name: "Email Templates",
    path: "/admin/emailTemplates",
  },
  {
    icon: <FaClipboardList />,
    name: "Masters",
    subItems: [
      {
        name: "Service Request Type",
        path: "/admin/masters/serviceReqType",
        pro: false,
      },
      {
        name: "Document Type",
        path: "/admin/masters/docType",
        pro: false,
      },
    ],
  },

  {
    icon: <FaUserNurse />,
    name: "Nurse Management",
    subItems: [
      {
        name: "View All",
        path: "/admin/nurseManagement/viewAllNurse",
        pro: false,
      },
      {
        name: "Newly Registered",
        path: "/admin/nurseManagement/newlyRegistered",
        pro: false,
      },
      {
        name: "View Pending Nurse",
        path: "/admin/nurseManagement/viewPendingNurse",
        pro: false,
      },
    ],
  },
  {
    icon: <FaUserInjured />,
    name: "Patients",
    subItems: [
      { name: "View All", path: "/admin/patients/viewAllPatient", pro: false },
      {
        name: "Register New",
        path: "/admin/patients/registerNew",
        pro: false,
      },
    ],
  },
];
