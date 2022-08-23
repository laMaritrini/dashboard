import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../features/booking/bookingsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});
