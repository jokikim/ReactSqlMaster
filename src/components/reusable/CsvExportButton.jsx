import React from 'react'
import useData from '../../hooks/useData'
import CsvDownload from 'react-json-to-csv'
import Papa from 'papaparse';
import debounce from 'lodash.debounce';
import { BsDownload, BsUpload } from 'react-icons/bs';

const CsvExportButton = ({data}) => {


  const exportCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const debouncedExportCSV = debounce(exportCSV, 500);

  return (
    <button
      className='flex gap-1.5 justify-center items-center bg-white dark:bg-slate-600 dark:text-slate-100  dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-500 rounded-lg px-4 py-1.5 text-base'
      onClick={debouncedExportCSV}
    >
     <div>
      <BsDownload className='w-5 h-4' />
     </div>
      <p>CSV</p>
    </button>
  );
}

export default CsvExportButton
