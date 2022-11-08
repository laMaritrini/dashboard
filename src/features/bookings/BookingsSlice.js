import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  editBooking,
} from "../../service/api-booking";

export const fetchBookings = createAsyncThunk("get/fetchBookings", async () => {
  return await getBookings();
});

export const fetchBooking = createAsyncThunk("get/fetchBooking", async (id) => {
  const response = await getBooking(id);
  return response;
});

export const createNewBooking = createAsyncThunk(
  "create/createNewBooking",
  async (data) => {
    const response = await createBooking(data);
    return response;
  }
);
export const removeBooking = createAsyncThunk(
  "delete/removeBooking",
  async (id) => {
    return await deleteBooking(id);
  }
);
export const updateBooking = createAsyncThunk(
  "update/updateBooking",
  async (id, data) => {
    const response = await editBooking(id, data);
    return response;
  }
);

const initialState = {
  bookings: [],
  booking: {},
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bookings = action.payload;
    });
    builder.addCase(fetchBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.booking = action.payload;
    });
    builder.addCase(createNewBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bookings = [...state.bookings, action.payload];
    });
    builder.addCase(removeBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      const newBookingList = state.bookings.filter(
        (item) => item._id !== action.payload
      );
      state.rooms = [...newBookingList];
    });
    builder.addCase(updateBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bookings = state.bookings.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});

export default bookingsSlice.reducer;

export const selectState = (state) => state.bookings.bookings;
export const selectStateDetail = (state) => state.bookings.booking;
