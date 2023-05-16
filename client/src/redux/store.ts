import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photos";
import selectTypeSlice from "./slices/selectType";

// Configure the Redux store
export const store = configureStore({
  reducer: { photos: photosSlice, selectType: selectTypeSlice },
});

// Define the RootState type using the ReturnType utility
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type as the typeof store.dispatch
export type AppDispatch = typeof store.dispatch;
