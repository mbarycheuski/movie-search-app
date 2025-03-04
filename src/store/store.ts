import { configureStore } from "@reduxjs/toolkit";
import { moviedbApi } from "../api/services";

export const store = configureStore({
  reducer: {
    [moviedbApi.reducerPath]: moviedbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviedbApi.middleware),
});
