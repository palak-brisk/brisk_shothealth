"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import DataTable from "@/components/Table";
import { adminTableData } from "@/constants/admin/adminTableData";
import { adminTableColumn } from "@/constants/admin/adminTableColums";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="col-span-12 xl:col-span-7">
      <h1 className="text-3xl font-medium text-gray-800 dark:text-white/90 pb-3">
        Dashboard
      </h1>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white/90">
              Latest Requests
            </h3>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <DataTable
            columns={adminTableColumn}
            data={adminTableData}
            pagination={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
