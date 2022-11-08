import { configureStore } from "@reduxjs/toolkit";
import bookingsReducer from "../features/bookings/BookingsSlice";
import roomsReducer from "../features/rooms/RoomsSlice";
import usersReducer from "../features/users/UsersSlice";
import contactsReducer from "../features/contact/ContactSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    rooms: roomsReducer,
    users: usersReducer,
    contacts: contactsReducer,
  },
});
