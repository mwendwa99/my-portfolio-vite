import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import themeSlice from "./slices/themeSlice";
import contentReducer from "./slices/contentSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
    content: contentReducer,
    theme: themeSlice,
  },
});
