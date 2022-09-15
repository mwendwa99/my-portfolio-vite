import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
import projectReducer from "../slices/projectSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer,
  },
});
