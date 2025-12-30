import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const patientsTableColumns = [
  { label: "Patient Name", accessor: "patientName" },
  { label: "Email", accessor: "email" },
  { label: "Phone No", accessor: "phoneNo" },
  { label: "City", accessor: "city" },
  { label: "State or Region", accessor: "state" },
  { label: "Zipcode", accessor: "zipcode" },
  { label: "Signuo Date", accessor: "signupDate" },
  { label: "Is active", accessor: "isActive" },
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
