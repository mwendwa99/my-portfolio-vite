import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import themeSlice from "./slices/themeSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    theme: themeSlice,
  },
});
