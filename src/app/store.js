import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../features/bookings/bookingsSlice";
import roomsReducer from "../features/rooms/roomsSlice";
import usersReducer from "../features/users/usersSlice";
import contactsReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contacts: contactsReducer,
  },
});
