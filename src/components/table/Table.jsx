import React from 'react';
import Loader from '../reusable/Loader';

const Table = ({
  tableHeader,
  isLoading,
  data,
  currentPage,
  resultsPerPage,
}) => {

  if (isLoading) {
    return (
      <div className='flex justify-center mt-20 items-center h-full text-2xl font-semibold dark:text-slate-300'>
        {!data ? 'No data available' : 'Run Query to see Results👨‍💻'}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className='flex justify-center mt-20 items-center h-full dark:text-slate-300'>
        <Loader />
      </div>
    );
  }


  return (
    <table className='dark:text-slate-300 border-collapse border border-hidden text-sm table-auto w-full'>
    <thead>
      <tr className='bg-gray-200 dark:bg-indigo-950'>
        <th className='p-2 border border-gray-300 dark:border-slate-600'>
          #
        </th>
        {tableHeader.map((header, index) => (
          <th
            className='p-2 border border-gray-300 dark:border-slate-600 dark:bg-indigo-950'
            key={index}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          className='even:bg-slate-10 dark:bg-slate-800 dark:even:bg-slate-900'
          key={rowIndex}
        >
          <td className='bg-gray-200 dark:bg-indigo-950 p-2 border border-gray-400 dark:border-slate-700'>
            {rowIndex + 1 + (currentPage - 1) * resultsPerPage}
          </td>
          {Object.values(row).map((value, cellIndex) => (
            <td
              className='p-2 border border-gray-300 dark:border-slate-700'
              key={cellIndex}
            >
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default Table;
