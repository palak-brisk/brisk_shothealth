import React from "react";
import DataTable from "@/components/Table";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { adminTableData } from "@/constants/admin/adminTableData";
import { userTableColumn } from "@/constants/admin/userTableColumns";
import NewUserCreate from "./components/createModal";
import Input from "@/components/form/input/InputField";

const AllUsers = () => {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const { isOpen, openModal, closeModal } = useModal();
    const handleSave = () => {
      // Handle save logic here
      console.log("Saving changes...");
      closeModal();
    };

  return (
    <div className="col-span-12 xl:col-span-7">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        {/* <Button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md">
          <FaSquarePlus /> Create
        </Button> */}
        <NewUserCreate className="max-w-[700px] m-4"/>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div></div>
          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                  <FaMagnifyingGlass />
                </span>
                <Input
                  // ref={inputRef}
                  type="text"
                  placeholder="Search by name, phone number or email..."
                  className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
                />
              </div>
            </form>
          </div>
          {/* <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              <svg
                className="stroke-current fill-white dark:fill-gray-800"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.29004 5.90393H17.7067"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.7075 14.0961H2.29085"
                  stroke=""
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
                <path
                  d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                  fill=""
                  stroke=""
                  strokeWidth="1.5"
                />
              </svg>
              Filter
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              See all
            </button>
          </div> */}
        </div>
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={userTableColumn}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
