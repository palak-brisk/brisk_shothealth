import Badge from "@/components/ui/badge/Badge";

export const adminTableColumn = [
  { label: "Request No", accessor: "requestNo" },
  { label: "Patient Name", accessor: "patientName" },
  { label: "Service Request Type", accessor: "serviceRequestType" },
  { label: "Service Schedule Date", accessor: "serviceScheduleDate" },
  { label: "Nurse Name", accessor: "nurseName" },
  {
    label: "Status",
    accessor: "status",
    render: (val) => (
      <Badge
        size="sm"
        color={
          val === "Active" ? "success" : val === "Pending" ? "warning" : "error"
        }
      >
        {val}
      </Badge>
    ),
  },
  { label: "Actions", accessor: "actions" },
];
