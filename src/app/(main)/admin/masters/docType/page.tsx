import React from "react";
import DataTable from "@/components/Table";
import Button from "@/components/ui/button/Button";
import { FaMagnifyingGlass, FaAngleDown, FaSquarePlus } from "react-icons/fa6";
import Select from "@/components/form/Select";
import Label from "@/components/form/Label";
import { adminTableData } from "@/constants/admin/adminTableData";
import { docTypeTableColumns } from "@/constants/admin/docTypeTableColumns";
import { roleTypeOptions } from "@/constants/roleTypeOption";

const DocumentType = () => {
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800"> Document Type</h1>
        <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
          <FaSquarePlus /> Create
        </Button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {/* <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Document Type
            </h3> */}
          </div>
          <div className="hidden lg:block">
            <form>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
                <div className="w-full sm:w-1/3">
                  <div className="relative">
                    <Select
                      options={roleTypeOptions}
                      placeholder="- Select Role Type -"
                      // onChange={handleSelectChange}
                      className="dark:bg-dark-900 w-full"
                    />
                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                      <FaAngleDown />
                    </span>
                  </div>
                </div>

                <div className="relative w-full sm:w-2/3">
                  <Label className="sr-only">Search</Label>
                  <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
                    <FaMagnifyingGlass />
                  </span>
                  <input
                    type="text"
                    placeholder="Filter by name and help text"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={docTypeTableColumns}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentType;
