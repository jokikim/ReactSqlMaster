import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai'
import CsvExportButton from "../reusable/CsvExportButton";
import JsonExportButton from "../reusable/JsonExportButton";
import { MdClose } from "react-icons/md";
const OutputSummary = ({
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
}) => {
  const formattedRunTime = (Math.round(parseFloat(runtime) * 100) / 100).toFixed(2);


  return (
    <div className="sticky top-0 dark:bg-slate-900 dark:text-slate-300 bg-gray-50 px-4 py-4 text-sm flex justify-between gap-4 items-center whitespace-nowrap w-full">
      <div className="flex items-center">
        <button className="mr-4 flex justify-center items-center text-gray-400 hover:text-gray-600 dark:hover:text-slate-100">
          <span
            onClick={() => setSplitSize([100, 0])}
            className="material-symbols-outlined"
          >
            <MdClose  className="w-6 h-6"/>
          </span>
        </button>
        <span className="mr-4 text-lg bg-white dark:bg-slate-700 dark:text-slate-200  dark:border-slate-600  border-solid border border-gray-500 px-2 py-1 rounded-lg ">Total Rows: {rowCount}</span>
        <span className="mr-4 text-lg px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200  dark:border-slate-600  border-solid border border-gray-500">Execution Time: <span className="text-[#4FC996] font-semibold">{formattedRunTime} s</span></span>
        {/* <div className="mr-2 text-lg bg-slate-700 px-2 py-1 rounded-lg"> */}
          {/* <span className="">Results per page: </span> */}
          <select
            value={resultsPerPage}
            onChange={handleResultsPerPageChange}
            className=" cursor-pointer mr-2 text-lg  px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200  dark:border-slate-600  border-solid border border-gray-500"
          >
            <option value={20}>Show 20</option>
            <option value={50}>Show 50</option>
            <option value={100}>Show100</option>
          </select>
        {/* </div> */}
        <div className="cursor-pointer mr-2 text-lg  px-2 py-1 rounded-lg bg-white dark:bg-slate-700 dark:text-slate-200  dark:border-slate-600  border-solid border border-gray-500">
          <span className="mx-2">Page</span>
          <input
            className="bg-inherit "
            type="number"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={handlePageChange}
          />
          <span>of {totalPages}</span>

        </div>
      <div className="flex items-center justify-center">
          <button
            className="flex justify-center items-center  select-none cursor-pointer dark:hover:text-slate-100"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined">
              <AiOutlineLeftSquare className="w-8 h-8" />
              
            </span>
          </button>
          <button
          className=" flex justify-center items-center select-none cursor-pointer dark:hover:text-slate-100"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <span className="material-symbols-outlined">
            <AiOutlineRightSquare className="w-8 h-8" />
          </span>
        </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <CsvExportButton
        data={data}
        />
        <JsonExportButton 
        data={data}
        />
      </div>
    </div>
  );
};

export default OutputSummary;
