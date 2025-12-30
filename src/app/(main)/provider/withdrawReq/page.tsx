import React from "react";
import DataTable from "@/components/Table";
import { adminTableData } from "@/constants/admin/adminTableData";
import { withdrawReqColumns } from "@/constants/nurse/withdrawReqColumns";

const WithdrawRequest = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">
          My Withdraw Request
        </h1>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div></div>
          <div className="hidden lg:block">
            <form>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
                {/* Nurse Type Select */}
                <div className="flex justify-end items-center space-x-8 p-4">
                  <div className="text-right">
                    <div className="text-sm text-gray-700">
                      Available Wallet Balance{" "}
                      <span className="font-bold text-black">$ 0.00</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-700">
                      Provisional Wallet Balance{" "}
                      <span className="font-bold text-black">$ 0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={withdrawReqColumns}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequest;
