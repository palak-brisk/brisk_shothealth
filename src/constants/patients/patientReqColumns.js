import Badge from "@/components/ui/badge/Badge";

export const patientReqColumns = [
  { label: "Request No", accessor: "requestNo" },
  { label: "Service Request Type", accessor: "serviceRequestType" },
  { label: "Service Schedule Date", accessor: "serviceScheduleDate" },
  { label: "Service Location", accessor: "serviceLocation" },
  { label: "Nurse Name", accessor: "nurseName" },
  {
    label: "Status",
    accessor: "status",
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
  { label: "Actions", accessor: "actions" },
];
