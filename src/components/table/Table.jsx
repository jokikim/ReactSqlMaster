import React from 'react';

const Table = ({
  isLoading,
  data,
  currentPage,
  resultsPerPage,
}) => {
  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-full dark:text-slate-300'>
        Loading...
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className='flex justify-center items-center h-full dark:text-slate-300'>
        {data ? 'No data available' : 'Run Query to see Results'}
      </div>
    );
  }

  // Extract the headers from the first object in the data array
  const headers = Object.keys(data[0]);

  return (
    <table className='dark:text-slate-300 border-collapse border border-hidden text-sm table-auto w-full'>
      <thead>
        <tr className='bg-gray-100 dark:bg-slate-700'>
          {/* Add row number header */}
          <th className='p-2 border border-gray-300 dark:border-slate-600'>
            #
          </th>
          {/* Render table headers */}
          {headers.map((header, index) => (
            <th
              className='p-2 border border-gray-300 dark:border-slate-600'
              key={index}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render table rows */}
        {data.map((row, rowIndex) => (
          <tr
            className={`${
              rowIndex % 2 === 0
                ? 'even:bg-slate-50 dark:even:bg-slate-800'
                : 'dark:bg-slate-900'
            }`}
            key={rowIndex}
          >
            {/* Render row number */}
            <td className='bg-gray-100 dark:bg-slate-700 p-2 border border-gray-300 dark:border-slate-600'>
              {rowIndex + 1 + (currentPage - 1) * resultsPerPage}
            </td>
            {/* Render table cells using headers */}
            {headers.map((header, cellIndex) => (
              <td
                className='p-2 border border-gray-300 dark:border-slate-700'
                key={cellIndex}
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
