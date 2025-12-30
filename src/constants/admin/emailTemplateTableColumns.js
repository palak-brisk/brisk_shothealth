import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";

export const emailTemplateTableColumns = [
  { label: "Email Template Type", accessor: "emailTemplateType" },
  { label: "Email Subject", accessor: "emailSubject" },
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
