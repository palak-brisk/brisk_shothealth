import React from "react";
import DataTable from "@/components/Table";
import { adminTableData } from "@/constants/admin/adminTableData";
import { nurseReqColumns } from "@/constants/nurse/nurseReqColumns";

const ManageServiceRequest = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">New Service Request List</h1>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={nurseReqColumns}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageServiceRequest;
