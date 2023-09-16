import React from "react";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";
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
  const formattedRunTime = (runtime / 1000).toFixed(2);

  return (
    <div className='sticky top-0 dark:bg-slate-800 dark:text-slate-300 bg-gray-50 px-4 py-2 text-sm flex justify-between gap-4 items-center whitespace-nowrap w-full'>
    <div className='flex items-center'>
      <button className='mr-4 flex justify-center items-center text-gray-400 hover:text-gray-600 dark:hover:text-slate-100'>
        <span
          onClick={() => setSplitSize([100, 0])}
          className='material-symbols-outlined'
        >
          close
        </span>
      </button>
      <span className='mr-4'>Total Rows: {rowCount}</span>
      <span className='mr-4'>Execution Time: {runtime} s</span>
      <span className='mr-2'>Results per page: </span>
      <select
        value={resultsPerPage}
        onChange={handleResultsPerPageChange}
        className='bg-inherit cursor-pointer'
      >
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <button
        className='flex justify-center items-center ml-4 select-none cursor-pointer dark:hover:text-slate-100'
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <span className='material-symbols-outlined'><BsArrowLeft /></span>
      </button>
      <span className='mx-2'>Page</span>
      <input
        className='bg-inherit'
        type='number'
        min={1}
        max={totalPages}
        value={currentPage}
        onChange={handlePageChange}
      />
      <span>of {totalPages}</span>
      <button
        className='ml-2 flex justify-center items-center select-none cursor-pointer dark:hover:text-slate-100'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className='material-symbols-outlined'><BsArrowRight /></span>
      </button>
    </div>
    {/* <ExportButton data={csvData} /> */}
  </div>
  );
};

export default OutputSummary;
