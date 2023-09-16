import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveTab, addNewTab, removeTab } from '../../redux/appSlice';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import EditorPanel from './EditorPanel';


const EditorTabs = () => {
  const dispatch = useDispatch();
  const fullScreen = useSelector((state) => state.app.fullScreen)
  const activeTab = useSelector((state) => state.app.activeTab);
  const tabs = useSelector((state) => state.app.tabs);

  const handleTabClick = (tabId) => {
    dispatch(changeActiveTab(tabId)); // Dispatch the changeActiveTab action
  };

  const handleAddNewTab = () => {
    dispatch(addNewTab()); // Dispatch the addNewTab action
  };

  const handleRemoveTab = (tabId) => {
    dispatch(removeTab(tabId)); // Dispatch the removeTab action
  };

  return (
    <div className="flex flex-col w-[100vw] divide-y dark:divide-slate-700">
    <div
      className={`${
        fullScreen ? "" : "hidden"
      } flex justify-between dark:bg-slate-900 dark:text-slate-300`}
    >
      <div className="flex gap-x-1">
        <div className="flex overflow-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`hover:border-b-blue-500 dark:hover:border-b-blue-400 mr-1 flex justify-center items-center whitespace-nowrap px-4 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white-100 border-b-2 border-b-blue-500"
                  : "bg-gray-200 dark:border-slate-800 border-b-2 dark:bg-slate-800 "
              }`}
              onClick={() => handleTabClick(tab.id)} // Call the function to dispatch changeActiveTab
            >
              <span> {tab.title}</span>

              <button
                className="flex items-center justify-center ml-2 text-gray-400 hover:text-gray-900 dark:hover:text-slate-500"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTab(tab.id); // Call the function to dispatch removeTab
                }}
              >
                <span className="-mr-1 material-symbols-outlined"><AiOutlineClose /></span>
              </button>
            </div>
          ))}
        </div>
        <button
          className="min-w-[50px] h-[50px] bg-gray-200 text-blue-600 dark:bg-slate-800 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-slate-700 dark:text-blue-400"
          onClick={handleAddNewTab} // Call the function to dispatch addNewTab
        >
          <span className="material-symbols-outlined"><AiOutlinePlus /></span>
        </button>
      </div>
    </div>

    {
      tabs.map((tab) => (
        <EditorPanel 
        key={tab.id}
        tabId={tab.id}
        initialQueryName={tab.queryName}
        initialQuery={tab.query}
        />
      ))
    }
  </div>
  )
}

export default EditorTabs
