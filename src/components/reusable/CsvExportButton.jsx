import React from 'react';
import debounce from 'lodash.debounce';
import { BsDownload } from 'react-icons/bs';
import { exportCSV } from '../../utils/csvDownload';

const CsvExportButton = ({ data }) => {
  const handleClick = debounce(() => {
    exportCSV(data);
  }, 500);

  return (
    <button
      className='flex gap-1.5 justify-center items-center bg-white dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-500 rounded-lg px-4 py-1.5 text-base'
      onClick={handleClick}
    >
      <BsDownload className='w-5 h-4' />
      <p>CSV</p>
    </button>
  );
};

export default CsvExportButton;
