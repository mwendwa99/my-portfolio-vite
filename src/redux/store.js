import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./reducers/projectSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
  },
});
