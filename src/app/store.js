import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jokesApi } from "../query/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jokesApi.reducerPath]: jokesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesApi.middleware),
});

setupListeners(store.dispatch);
