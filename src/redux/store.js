import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import loaderReducer from "./loaderSlice";
import errorMassageReducer from "./errorSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
    loader: loaderReducer,
    errorMassage: errorMassageReducer,
  },
});

export const persistor = persistStore(store);
