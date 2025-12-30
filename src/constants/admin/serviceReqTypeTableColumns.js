import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const serviceReqTypeTableColumns = [
  { label: "Service Name", accessor: "serviceName" },
  { label: "Description", accessor: "description" },
  { label: "Service Charges", accessor: "serviceCharges" },
  { label: "No of Units", accessor: "noUnit" },
  { label: "Nurse Name", accessor: "nurseName" },
  { label: "RN", accessor: "rn" },
  { label: "NP", accessor: "np" },
  { label: "LPN", accessor: "lpn" },
  {
    label: "Status",
    accessor: "status",
  },
  {
    label: "Actions",
    accessor: "actions",
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
