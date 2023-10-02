import debounce from "lodash.debounce";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { exportToJson } from "../../utils/jsonDownload";

const JsonExportButton = ({ data }) => {
  
  const handleExportJson = debounce(() => {
    exportToJson(data);
  }, 500);

  return (
    <button
      className="flex gap-1.5 justify-center items-center bg-white dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 border-solid border border-gray-500 rounded-lg px-4 py-1.5 text-base"
      onClick={handleExportJson}
    >
      <BsDownload className="w-5 h-4" />
      <p>JSON</p>
    </button>
  );
};

export default JsonExportButton;
