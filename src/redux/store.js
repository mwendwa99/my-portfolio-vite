import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import projectReducer from "./slices/projectSlice";
import contentReducer from "./slices/contentSlice";
import themeReducer from "./slices/themeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducer = combineReducers({
  projects: projectReducer,
  content: contentReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
