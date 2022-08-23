import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockReservations } from "../../data/mockReservations";

export function delay(data, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const fetchBookings = createAsyncThunk(
  "post/fetchBookings",
  async () => {
    return await delay(MockReservations, 100);
  }
);

const initialState = { results: [] };

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking(state, action) {
      state.results.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.results = action.payload;
    });
  },
});

export default bookingsSlice.reducer;
export const {addBooking} = bookingsSlice.actions;
export const selectState = (state) => state.bookings.results;
