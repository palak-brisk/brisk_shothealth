import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const docTypeTableColumns = [
  { label: "Role Type", accessor: "roleType" },
  { label: "Document Type Name", accessor: "docTypeName" },
  { label: "Document Help Text", accessor: "docHelpText" },
  { label: "Is Required?", accessor: "isRequired" },
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
