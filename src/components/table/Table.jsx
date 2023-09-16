import React from 'react';

const Table = ({
  tableHeader,
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
  // const headers = Object.values(data[0]);
  // const rowsData = data.slice(1);
  console.log({data})
  return (
    <table className='dark:text-slate-300 border-collapse border border-hidden text-sm table-auto w-full'>
      <thead>
        <tr className='bg-gray-100 dark:bg-slate-700'>
          {/* Add row number header */}
          <th className='p-2 border border-gray-300 dark:border-slate-600'>
            #
          </th>
          {/* Render table headers */}
          {tableHeader.map((header, index) => (
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
            className='even:bg-slate-50 dark:bg-slate-900 dark:even:bg-slate-800'
            key={rowIndex}
          >
            {/* Render row number */}
            <td className='bg-gray-100 dark:bg-slate-700 p-2 border border-gray-300 dark:border-slate-600'>
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