import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import taskReducer from "./reducers/task";
import { buttonReducer } from "./reducers/button";
import categoryReducer from "./reducers/category";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  buttonclick: buttonReducer,
  tasks: taskReducer,
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export const persistor = persistStore(Store);

export const resetStore = async () => {
  await persistor.purge(); // Clears the persisted state
};
