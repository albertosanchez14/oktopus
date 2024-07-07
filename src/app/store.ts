import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/hooks/authSlice";
import folderReducer from "../features/files/hooks/foldersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    folder: folderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
