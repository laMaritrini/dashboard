import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockRooms } from "../../data/mockRooms";

export function delay(data, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const fetchRooms = createAsyncThunk("post/fetchRooms",
 async () => {
  return await delay(MockRooms, 100);
});

export const fetchRoom = createAsyncThunk("get/fetchRoom", async (id) => {
  const oneRoom = MockRooms.find((item) => item.id === id);
  return await delay(oneRoom, 100);
});

export const createNewRoom = createAsyncThunk(
  "create/createNewRoom",
  async (data) => {
    const newArray = data;
    return await delay((MockRooms, newArray), 100);
  }
);
export const removeRoom = createAsyncThunk(
  "delete/removeRoom",
  async (id) => {
    const newRoomsArray = MockRooms.filter((item) => item.id !== id);
    return await delay(newRoomsArray, 100);
  }
);
export const updateRoom = createAsyncThunk(
  "update/updateRoom",
  async (id, data) => {
    const newRoomsArray = MockRooms.map((item) =>
      item.id === id ? { ...item, data } : item
    );
    return await delay(newRoomsArray, 100);
  }
);

const initialState = {
  rooms: [],
  room: [],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rooms = action.payload;

    });
    builder.addCase(fetchRoom.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.room = action.payload;
    });
    builder.addCase(createNewRoom.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rooms = [...state.rooms, action.payload];
    });
    builder.addCase(removeRoom.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rooms = action.payload;
    });
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rooms = action.payload;
    });
  },
});

export default roomsSlice.reducer;


export const selectStateRooms = (state) => state.rooms.rooms;
export const selectStateDetail = (state) => state.rooms.room;
