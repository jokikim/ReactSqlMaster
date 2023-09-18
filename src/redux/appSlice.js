import {
  createSlice
} from "@reduxjs/toolkit";
import throttle from "lodash.throttle";

const initialState = {
  theme: localStorage.getItem("EDITOR_THEME") || "dark",
  executableQuery: "",
  activeTab: 1,
  fullScreen: true,
  tabCount: 1,
  tabs: [{
    id: 1,
    title: "Tab 1",
    queryName: "",
    query: "select * from customers;",
    queryResults: [],
  }, ]
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleFullScreen: throttle((state) => {
      state.fullScreen = !state.fullScreen;
    }, 250),
    toggleDarkMode: throttle((state) => {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
      localStorage.setItem("EDITOR_THEME", state.theme);
    }, 250),
    increaseTabCount: (state) => {
      state.tabCount = (prevState) => prevState + 1;
    },

    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    addNewTab: (state) => {
      if (state.tabs.length >= 15) {
        window.alert("Max Tab Limit Reached!!!");
        return;
      }

      const newTabId = state.tabCount + 1;
      const newTabTitle = `Tab ${newTabId}`;
      const newTabData = {
        id: newTabId,
        title: newTabTitle,
        queryName: "",
        query: "",
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
      let query = currentQuery.toLowerCase();
    
      if (query.endsWith(';')) {
        query = query.slice(0, -1);
      }
      const words = query.split(' ');
      state.executableQuery = words[words.length - 1];
    },
    
    updateCurrentEditorResults: (state, action) => {
      const results = action.payload;
      const currentTab = state.tabs.findIndex(
        (tab) => tab.id.toString() === state.activeTab.toString()
      );
      state.tabs[currentTab].queryResults = results;
    }
  },
});

export const {
  toggleFullScreen,
  toggleDarkMode,
  changeActiveTab,
  addNewTab,
  removeTab,
  updateCurrentEditorValue,
  runQueryHandler,
  updateCurrentEditorResults
} = appSlice.actions;
export default appSlice.reducer;