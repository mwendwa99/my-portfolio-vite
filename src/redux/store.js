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

const rootReducer = combineReducers({
  projects: projectReducer,
  content: contentReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  });

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
