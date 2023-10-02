import React, { memo } from "react";
import {
  AiOutlineLeftSquare,
  AiOutlineRightSquare,
} from "react-icons/ai";
import CsvExportButton from "../reusable/CsvExportButton";
import JsonExportButton from "../reusable/JsonExportButton";
import { MdClose } from "react-icons/md";

const OutputSummary = memo(function OutputSummary({
  rowCount,
  runtime,
  handleResultsPerPageChange,
  handleNextPage,
  handlePrevPage,
  currentPage,
  totalPages,
  handlePageChange,
  data,
  setSplitSize,
  resultsPerPage,
}) {
  const formattedRunTime = (Math.round(parseFloat(runtime) * 100) / 100).toFixed(2);

  const addClasses = (condition, classNames) => {
    return condition ? classNames : "";
  };

  return (
    <div className={`sticky top-0 dark:bg-slate-900 dark:text-slate-300 bg-gray-50 px-4 py-4 text-sm flex justify-between gap-4 items-center whitespace-nowrap w-full`}>
      <div className="flex items-center">
        <button className={`mr-4 flex justify-center items-center text-gray-400 hover:text-gray-600 dark:hover:text-slate-100 ${addClasses(data, "")}`}>
          <span onClick={() => setSplitSize([100, 0])}>
            <MdClose className="w-6 h-6" />
          </span>
        </button>
        {data && (
          <span className={`mr-4 text-lg bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 border-solid border border-gray-500 px-2 py-1 rounded-lg ${addClasses(data, "")}`}>
            Total Rows: {rowCount}
          </span>
        )}
        {data && (
          <span className={`mr-4 text-lg px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 border-solid border border-gray-500 ${addClasses(data, "")}`}>
            Execution Time: <span className="text-[#4FC996] font-semibold">{formattedRunTime} s</span>
          </span>
        )}
        {data && (
          <select
            value={resultsPerPage}
            onChange={handleResultsPerPageChange}
            className={`cursor-pointer mr-2 text-lg px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 border-solid border border-gray-500 ${addClasses(data, "")}`}
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
            <option value={100}>Show 100</option>
          </select>
        )}
        {data && (
          <div className={`cursor-pointer mr-2 text-lg px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 border-solid border border-gray-500 ${addClasses(data, "")}`}>
            <span className="mx-2">Page</span>
            <input
              className="bg-inherit"
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={handlePageChange}
            />
            <span>of {totalPages}</span>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button
            className={`flex justify-center items-center select-none cursor-pointer dark:hover:text-slate-100 ${addClasses(
              currentPage > 1 && data,
              ""
            )}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <AiOutlineLeftSquare className="w-8 h-8" />
          </button>
          <button
            className={`flex justify-center items-center select-none cursor-pointer dark:hover:text-slate-100 ${addClasses(
              currentPage < totalPages && data,
              ""
            )}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <AiOutlineRightSquare className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {data && <CsvExportButton data={data} />}
        {data && <JsonExportButton data={data} />}
      </div>
    </div>
  );
});

export default OutputSummary;
