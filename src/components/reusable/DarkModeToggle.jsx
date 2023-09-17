import React, { useEffect } from "react";
import { toggleDarkMode } from "../../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";
const DarkModeToggle = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      onClick={handleDarkModeToggle}
      className="dark:bg-slate-600 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-500 cursor-pointer hover:bg-gray-200 active:bg-gray-300 text-sm flex justify-center items-center border-solid border border-gray-500 rounded-lg p-2"
    >
      <span className="material-symbols-outlined">
        {theme === "dark" ? (
          <HiMoon className="w-6 h-6 text-white" />
        ) : (
          <HiSun className="w-6 h-6 text-gray-900" />
        )}
      </span>
    </div>
  );
};

export default DarkModeToggle;
