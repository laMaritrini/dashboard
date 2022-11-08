import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createRoom,
  deleteRoom,
  editRoom,
  getRoom,
  getRooms,
} from "../../service/api-rooms";


export const fetchRooms = createAsyncThunk("get/fetchRooms", async () => {
  return await getRooms();
});

export const fetchRoom = createAsyncThunk("get/fetchRoom", async (id) => {
  const oneRoom = await getRoom(id);
  return oneRoom;
});

export const createNewRoom = createAsyncThunk(
  "create/createNewRoom",
  async (data) => {
    const response = await createRoom(data);
    return response;
  }
);
export const removeRoom = createAsyncThunk("delete/removeRoom", async (id) => {
  return await deleteRoom(id);
});
export const updateRoom = createAsyncThunk(
  "update/updateRoom",
  async ({id, data}) => {
    const response = await editRoom(id, data);
    return response;
  }
);

const initialState = {
  rooms: [],
  room: {},
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
      const newRoomsList = state.rooms.filter(
        (item) => item._id !== action.payload
      );
      state.rooms = [...newRoomsList];
    });
    builder.addCase(updateRoom.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rooms = state.rooms.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});

export default roomsSlice.reducer;

export const selectStateRooms = (state) => state.rooms.rooms;
export const selectStateDetail = (state) => state.rooms.room;
