import React from "react";
import DataTable from "@/components/Table";
import Button from "@/components/ui/button/Button";
import { FaMagnifyingGlass, FaSquarePlus } from "react-icons/fa6";
import { adminTableData } from "@/constants/admin/adminTableData";
import { patientsTableColumns } from "@/constants/admin/patientsTableColumns";

const RegisterNewPatient = () => {
  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
          <FaSquarePlus /> Register New
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                  <FaMagnifyingGlass />
                </span>
                <input
                  // ref={inputRef}
                  type="text"
                  placeholder="Filter by name, phone number or email..."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={patientsTableColumns}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterNewPatient;
