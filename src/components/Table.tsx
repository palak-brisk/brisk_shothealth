"use client";
import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Pagination from "./ui/table/pagination";

const DataTable = ({
  columns,
  data,
  rowsPerPage = 10,
  isLoading = false,
  pagination,
  sorting,
  search,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  // const [sorting, setSorting] = useState(false);
  // const [pagination, setPagination] = useState(false);
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.accessor])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data, columns]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleSort = (accessor) => {
    if (sortColumn === accessor) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(accessor);
      setSortDirection("asc");
    }
  };
  return (
    <div className="min-w-[1102px]">
      {search ? (
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
      <Table className="text-center">
        <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.accessor}
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-6 text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : currentData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-6 text-center">
                No data found.
              </TableCell>
            </TableRow>
          ) : (
            currentData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((col) => (
                  <TableCell
                    key={col.accessor}
                    className="py-3 text-gray-500 text-theme-sm dark:text-gray-400"
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : row[col.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>{" "}
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-6 w-full">
        {/* Show entries on the left */}
        <div className="flex items-center space-x-2">
          <label htmlFor="entries" className="text-sm text-gray-600">
            Show
          </label>
          <select
            id="entries"
            value={entriesPerPage}
            disabled={!pagination}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
            className="rounded border border-gray-300 px-2 py-1 text-sm"
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">entries</span>
        </div>

        {/* Pagination Controls in center */}
        {pagination ? (
          <div className="flex-1 flex justify-center">
            <Pagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        ) : (
          // <div className="flex justify-between mt-4">
          //   <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          //     Previous
          //   </Button>
          //   <p className="text-gray-500">
          //     Page {currentPage} of {totalPages}
          //   </p>
          //   <Button
          //     onClick={handleNextPage}
          //     disabled={currentPage === totalPages}
          //   >
          //     Next
          //   </Button>
          // </div>
          ""
        )}
      </div>
      
    </div>
  );
};

export default DataTable;
