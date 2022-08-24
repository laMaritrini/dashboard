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

export const fetchBooking = createAsyncThunk("get/fetchBooking", async (id) => {
  const oneBooking = MockReservations.find((item) => item.id === id);
  return await delay(oneBooking, 100);
});

export const createNewBooking = createAsyncThunk(
  "create/createNewBooking",
  async (data) => {
    const newArray = data;
    return await delay((MockReservations, newArray), 100);
  }
);
export const removeBooking = createAsyncThunk(
  "delete/removeBooking",
  async (id) => {
    const newBookingsArray = MockReservations.filter((item) => item.id !== id);
    return await delay(newBookingsArray, 100);
  }
);
export const updateBooking = createAsyncThunk(
  "update/updateBooking",
  async (id, data) => {
    const newBookingsArray = MockReservations.map((item) =>
      item.id === id ?{...item, data }: item
    );
    return await delay(newBookingsArray, 100);
  }
);

const initialState = {
  bookings: [],
  booking: [],
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
      state.bookings = action.payload;
    });
    builder.addCase(updateBooking.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.bookings = action.payload;
    });
  },
});

export default bookingsSlice.reducer;

export const selectState = (state) => state.bookings.bookings;
export const selectStateDetail = (state) => state.bookings.booking;
