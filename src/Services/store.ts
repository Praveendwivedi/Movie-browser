import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { movieApi } from "./movieApi";

const store = configureStore({
  reducer: {
    movieApi:movieApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(movieApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
