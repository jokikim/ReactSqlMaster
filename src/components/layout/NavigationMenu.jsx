import React, { useState, useEffect, memo } from "react";
import TABLE_NAMES from "../../utils/constants";
import { convertToNormalString } from "../../utils/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentEditorValue } from "../../redux/appSlice";
import useData from "../../hooks/useData";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Loader from "../reusable/Loader";

const NavigationMenu = memo(function NavigationMenu() {
  const dispatch = useDispatch();
  const fullScreen = useSelector((state) => state.app.fullScreen);
  const [activeTableName, setActiveTableName] = useState("");
  const { data } = useData(activeTableName);
  const [tableSchema, setTableSchema] = useState([]);

  const handleQuery = (queryName) => {
    setActiveTableName((prevName) => (prevName === queryName ? "" : queryName));
  };

  const selectQueryHandler = (queryName) => {
    dispatch(updateCurrentEditorValue(`select * from ${queryName};`));
  };

  useEffect(() => {
    if (data) {
      setTableSchema(data[0]);
    }
  }, [data]);

  return (
    !fullScreen && (
      <div className="flex flex-col divide-y px-4 dark:bg-[#171717] dark:text-slate-300 bg-gray-50 min-w-[300px] dark:divide-slate-700 max-h-screen scrollbar-theme overflow-auto">
        <aside className="p-5">
          {TABLE_NAMES.map((name) => {
            // const finalName = convertToNormalString(name);
            return (
              <div key={name}>
                <button
                  className="flex items-center justify-center p-2 my-6 transition-colors dark:text-secondary-light hover:text-white dark:hover:text-white text-slate-800 hover:bg-slate-500 dark:hover:bg-primary-dark duration-200 rounded-lg "
                  onClick={() => handleQuery(name)}
                >
                  {activeTableName === name ? (
                    <MdOutlineKeyboardArrowUp className="mt-1 text-lg" />
                  ) : (
                    <MdOutlineKeyboardArrowRight className="mt-1 text-lg" />
                  )}
                  <span className="mx-4 text-base font-normal">{name}</span>
                </button>
                {activeTableName === name && (
                  <div className="flex flex-col gap-4">
                    <button
                      className="rounded-lg bg-green-300 px-4 py-1  dark:text-black text-white hover:bg-green-400 transition-all ease-in-out duration-150"
                      onClick={() => selectQueryHandler(name)}
                    >
                      Select table
                    </button>
                    <ul className="flex flex-col pl-5 border-l-4 border-[#353F50] justify-center">
                      {tableSchema ? (
                        Object.values(tableSchema).map((val, index) => (
                          <li key={index} className="flex justify-between">
                            <p>{val}</p>
                            <p className="text-sm text-slate-400">
                              {val.slice(-2).toLowerCase() === "id" ? "number" : typeof val}
                            </p>
                          </li>
                        ))
                      ) : (
                        <span className="ml-6 my-auto">
                          <Loader />
                        </span>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </aside>
      </div>
    )
  );
});

export default NavigationMenu;
