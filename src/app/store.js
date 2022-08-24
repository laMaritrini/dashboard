import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../features/booking/BookingsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});
