import React, { memo } from "react";
import { BsAspectRatio, BsPlay } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleFullScreen } from "../../redux/appSlice";
import DarkModeToggle from "../reusable/DarkModeToggle";
import TABLE_NAMES from "../../utils/constants";
import debounce from "lodash.debounce";
import { useEffect } from "react";

const CodeRunner = memo(function CodeRunner({ value, setTableName, setKey }) {
  const dispatch = useDispatch();

 const debouncedRunQueryHandler = debounce(() => runQueryHandler(), 500);

 const runQueryHandler = () => {
   let query = value;
   if (query.endsWith(";")) {
     query = query.slice(0, -1);
   }
   const words = query.split(" ");
   const tableExist = TABLE_NAMES.find(
     (name) => name === words[words.length - 1].toLowerCase()
   );
   setKey(prev => !prev)
   if (tableExist) {
     setTableName(words[words.length - 1]);
   } else {
    const randomIndex = Math.floor(Math.random() * TABLE_NAMES.length);
    setTableName( TABLE_NAMES[randomIndex]);
  }
  
 };


  return (
    <div className="bg-gray-100  dark:bg-slate-800 flex justify-between items-center px-4 py-2.5 whitespace-nowrap">
      <div className="flex gap-x-4">
      <button
          disabled={!value}
          onClick={debouncedRunQueryHandler}
          className={`flex justify-center items-center dark:text-slate-100 dark:bg-purple-900 dark:hover:bg-purple-950 bg-purple-700 hover:bg-purple-800 active:bg-purple-800 rounded-lg text-white px-5 py-2.5 gap-1 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed ${!value && "bg-gray-400 disabled:cursor-not-allowed"}`}
        >
          <BsPlay className="-ml-2 w-6 h-6" />
          <span className="text-lg">Run</span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => dispatch(toggleFullScreen())}
          className="dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300  flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2"
        >
          <span className="material-symbols-outlined">
            <BsAspectRatio className="w-6 h-6" />
          </span>
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
});

export default CodeRunner;
