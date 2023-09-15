import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullScreen: true,
  darkMode: true,
  tabCount: 1,
  activeTab: 1,
  tabs: [
    {
      id: 1,
      title: 'Tab 1',
      queryName: 'All Customers',
      query: 'SELECT * FROM customers',
    }
  ],
  savedQueries: JSON.parse(localStorage.getItem('savedQueries')) || {},
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleFullScreen: (state) => {
      state.fullScreen = !state.fullScreen;
    }
  }
})

export const { toggleFullScreen } = appSlice.actions;