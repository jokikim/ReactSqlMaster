import React from 'react'
import TABLE_NAMES from '../../utils/constants';
import { convertToNormalString } from '../../utils/utilFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentEditorValue } from '../../redux/appSlice';

const NavigationMenu = ({ isOpen, setIsOpen }) => {

  const dispatch = useDispatch();
  const fullScreen = useSelector((state) => state.app.fullScreen);
  const handleQuery = (queryName) => {
    // dispatch(updateQuery(queryName));
    // setQuery(queryName);
    dispatch(updateCurrentEditorValue(`select * from ${queryName}`));
    // setValue(`select * from ${queryName}`);
  };

  return (
    <>
      
      {fullScreen && (
        // <div className="relative col-start-1 col-end-2 row-start-1 row-end-5 ">
          <div className="flex flex-col divide-y px-4 dark:bg-slate-800 dark:text-slate-300 bg-gray-50 min-w-[300px] dark:divide-slate-700 max-h-screen overflow-auto">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white m-4 text-2xl cursor-pointer float-right h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => setIsOpen(!isOpen)}
            >
              <title id="rightArrow">right arrow</title>
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg> */}
            <aside className="p-5">
              {TABLE_NAMES.map((name) => {
                const finalName = convertToNormalString(name);
                return (
                  <button
                    className="flex items-center p-2 my-6 transition-colors text-secondary-light hover:text-white hover:bg-primary-dark duration-200 rounded-lg "
                    key={name}
                    onClick={() => {
                      handleQuery(name);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="mx-4 text-base font-normal">
                      {finalName}
                    </span>
                  </button>
                );
              })}
            </aside>
          </div>
        // </div>
      )}
    </>
  );
}

export default NavigationMenu
