import React from 'react';
import TABLE_NAMES from '../../utils/constants';
import { convertToNormalString } from '../../utils/utilFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentEditorValue } from '../../redux/appSlice';

const NavigationMenu = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const fullScreen = useSelector((state) => state.app.fullScreen);

  const handleQuery = (queryName) => {
    dispatch(updateCurrentEditorValue(`select * from ${queryName};`));
    setIsOpen(!isOpen);
  };

  return fullScreen && (
    <div className="flex flex-col divide-y px-4 dark:bg-[#171717] dark:text-slate-300 bg-gray-50 min-w-[300px] dark:divide-slate-700 max-h-screen scrollbar-theme overflow-auto">
      <aside className="p-5">
        {TABLE_NAMES.map((name) => {
          const finalName = convertToNormalString(name);
          return (
            <button
              key={name}
              className="flex items-center p-2 my-6 transition-colors dark:text-secondary-light hover:text-white dark:hover:text-white text-slate-800 hover:bg-slate-500 dark:hover:bg-primary-dark duration-200 rounded-lg "
              onClick={() => handleQuery(name)}
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
  );
};

export default NavigationMenu;
