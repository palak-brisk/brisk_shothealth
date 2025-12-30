import React from "react";
import DataTable from "@/components/Table";
import Button from "@/components/ui/button/Button";
import { FaSquarePlus } from "react-icons/fa6";
import { adminTableData } from "@/constants/admin/adminTableData";
import { bankDetailsColumns } from "@/constants/nurse/bankDetailsColumns";

const BankDetails = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">My Bank Details</h1>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
          <FaSquarePlus /> Add New
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={bankDetailsColumns}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
