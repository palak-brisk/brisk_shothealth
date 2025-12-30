import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const nurseTableColumns = [
  { label: "Role Type", accessor: "roleType" },
  { label: "Nurse Name", accessor: "nurseName" },
  { label: "Email", accessor: "email" },
  { label: "Phone No", accessor: "phoneNo" },
  { label: "City", accessor: "city" },
  { label: "State or Region", accessor: "state" },
  { label: "Zipcode", accessor: "zipcode" },
   { label: "Signup Date", accessor: "signupDate" },
  { label: "Documents?", accessor: "doc" },
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
];
