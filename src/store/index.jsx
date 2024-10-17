// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/UserSlice";
import productReducer from "./slices/ProductSlice";
import cartReducer from "./slices/CartSlice";

// Persist configuration for user authentication
const persistConfig = {
  key: "root",
  storage,
};

// Use persistReducer to create the persisted version of your user slice
const persistedUserReducer = persistReducer(persistConfig, userReducer);

// Store setup
export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Turn off serializable check for persist
    }),
});

// Create and export persistor
export const persistor = persistStore(store);
