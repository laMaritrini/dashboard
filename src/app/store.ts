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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
