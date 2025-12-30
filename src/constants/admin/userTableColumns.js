import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const userTableColumn = [
  { label: "Full name", accessor: "fullName" },
  { label: "User Name", accessor: "userName" },
  { label: "Email", accessor: "email" },
  { label: "Phone No", accessor: "phoneNo" },
  { label: "Roles", accessor: "roles" },
  { label: "Signup Date", accessor: "signupDate" },
  {
    label: "Profile Status",
    accessor: "profileStatus",
    // render: (val) => (
    //   <Badge
    //     size="sm"
    //     color={
    //       val === "Active" ? "success" : val === "Pending" ? "warning" : "error"
    //     }
    //   >
    //     {val}
    //   </Badge>
    // ),
  },
  {
    label: "Is active",
    accessor: "isActive",
    // render: (val) => (
    //   <Badge
    //     size="sm"
    //     color={
    //       val === "Active" ? "success" : val === "Pending" ? "warning" : "error"
    //     }
    //   >
    //     {val}
    //   </Badge>
    // ),
  },
  {
    label: "Actions",
    accessor: "actions",
    // render: (val) => (
    //   <div>
    //     <Badge
    //       size="sm"
    //       color={
    //         val === "Active"
    //           ? "success"
    //           : val === "Pending"
    //           ? "warning"
    //           : "error"
    //       }
    //     >
    //       {val}
    //     </Badge>
    //   </div>
    // ),
  },
];
