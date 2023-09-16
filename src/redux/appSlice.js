import { createSlice } from "@reduxjs/toolkit";
import throttle from "lodash.throttle";
const initialState = {
  fullScreen: true,
  darkMode: true,
  tabCount: 1,
  activeTab: 1,
  query: "",
  value: "SELECT * from customers",
  executableQuery: "",
  tabs: [
    {
      id: 1,
      title: "Tab 1",
      queryName: "",
      query: "select * from customers",
    },
  ],
  savedQueries: JSON.parse(localStorage.getItem("savedQueries")) || {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleFullScreen: throttle((state) => {
      state.fullScreen = !state.fullScreen;
    }, 250),
    toggleDarkMode: throttle((state) => {
      state.darkMode = !state.darkMode;
    }, 250),
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    updateValue: (state, action) => {
      state.value = action.payload;
    },
    saveNewQuery: (state, action) => {
      const { queryName, query } = action.payload;

      if (!queryName) {
        window.alert("Query Name Cannot be Empty");
        return;
      }
      if (!query) {
        window.alert("Query Cannot be Empty");
        return;
      }

      const alreadyExists = queryName in state.savedQueries;
      const newSavedQueries = { ...state.savedQueries, [queryName]: query };
      localStorage.setItem("savedQueries", JSON.stringify(newSavedQueries));
      window.alert(
        `${alreadyExists ? "Updated" : "Saved"} "${queryName}" Query!`
      );

      state.savedQueries = newSavedQueries;
    },
    deleteSavedQuery: (state, action) => {
      const queryName = action.payload;
      const { [queryName]: _, ...remainingQueries } = state.savedQueries;
      localStorage.setItem("savedQueries", JSON.stringify(remainingQueries));
      state.savedQueries = remainingQueries;
    },
    increaseTabCount: (state) => {
      state.tabCount += 1;
    },
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    addNewTab: (state) => {
      // const { queryName = "", query = "" } = action.payload;
      let queryName = "";
      let query = "";
      if (state.tabs.length >= 15) {
        window.alert("Max Tab Limit Reached!!!");
        return;
      }
      const newTabId = state.tabCount + 1;
      const newTabTitle = `Tab ${newTabId}`;
      const newTabData = {
        id: newTabId,
        title: newTabTitle,
        queryName: queryName,
        query: query,
      };
      state.tabCount += 1;
      state.activeTab = newTabId;
      state.tabs.push(newTabData);
    },
    removeTab: (state, action) => {
      const tabId = action.payload;
      let newActiveTabId = null;
      state.tabs = state.tabs.filter((tab) => {
        if (tab.id !== tabId) {
          return true;
        } else {
          const currentIndex = state.tabs.findIndex((tab) => tab.id === tabId);
          const prevTab = state.tabs[currentIndex - 1];
          const nextTab = state.tabs[currentIndex + 1];
          newActiveTabId = prevTab ? prevTab.id : nextTab ? nextTab.id : null;
          return false;
        }
      });
      if (newActiveTabId === null) {
        window.alert("There must be one active Tab!");
        return;
      }

      state.activeTab = newActiveTabId;
    },
    updateCurrentEditorValue: (state, action) => {
      const query = action.payload;
      const currentTab = state.tabs.findIndex(
        (tab) => tab.id.toString() === state.activeTab.toString()
      );
      state.tabs[currentTab].query = query;
    },
    runQueryHandler: (state) => {
      const currentTab = state.tabs.findIndex(
        (tab) => tab.id.toString() === state.activeTab.toString()
      );
      const currentQuery = state.tabs[currentTab].query;
      let Z = currentQuery
        .toLowerCase()
        .slice(currentQuery.indexOf("from") + "from".length);
      // dispatch(updateQuery(Z.split(" ")[1]));
      state.executableQuery = Z.split(" ")[1];
      // setQuery(Z.split(" ")[1]);
    },
  },
});

export const {
  updateQuery,
  updateValue,
  changeActiveTab,
  addNewTab,
  removeTab,
  updateCurrentEditorValue,
  runQueryHandler,
} = appSlice.actions;
export default appSlice.reducer;
