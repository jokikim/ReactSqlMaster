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
  }, [theme])

  return (
    <div
      onClick={handleDarkModeToggle}
      className="flex items-center justify-center select-none cursor-pointer w-[50px]  rounded-full p-1 border-gray-400 border"
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
