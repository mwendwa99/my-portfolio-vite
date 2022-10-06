import { configureStore } from "@reduxjs/toolkit";
import {
  projectReducer,
  themeReducer,
  contentReducer,
  adminReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    content: contentReducer,
    theme: themeReducer,
    admin: adminReducer,
  },
});
