import React from 'react'
import { BsPlay, BsAspectRatio } from 'react-icons/bs'
import { HiOutlinePlay } from 'react-icons/hi';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md'
import useData from '../../hooks/useData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFullScreen, updateQuery } from '../../redux/appSlice';
import { runQueryHandler } from '../../redux/appSlice';
import DarkModeToggle from '../reusable/DarkModeToggle';

const CodeRunner = ({ query, setQuery, value, setValue, handleQueryReset}) => {

  const dispatch = useDispatch();
  const executableQuery = useSelector((state) => state.app.executableQuery);
  const { isLoading } = useData(executableQuery);
  // const query = useSelector((state) => state.app.query);

  return (
    <div className='bg-gray-50 dark:bg-slate-800 flex justify-between items-center px-4 py-2 whitespace-nowrap'>
      <div className='flex gap-x-4'>
        <button
          // disabled={!query || isLoading}
          onClick={() => dispatch(runQueryHandler())}
          className='flex justify-center items-center text-sm dark:text-slate-100 dark:bg-green-700 dark:hover:bg-green-600 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg text-white px-5 py-2 gap-1 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed'
        >
          <span className='-ml-2 material-symbols-outlined'><BsPlay /></span>
          Run Query
        </button>
{/* 
        <button
          onClick={() => handleQueryReset()}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'>
            <MdOutlineSettingsBackupRestore />
          </span>
        </button> */}

      </div>
      <div className='flex items-center justify-center gap-4'>
        <button
          onClick={() => dispatch(toggleFullScreen())}
          className='dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 hover:bg-gray-200 active:bg-gray-300  flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2'
        >
          <span className='material-symbols-outlined'><BsAspectRatio className='w-6 h-6' /></span>
        </button>
      <DarkModeToggle />
      </div>

    </div>
  )
}

export default CodeRunner
