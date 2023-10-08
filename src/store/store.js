import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
