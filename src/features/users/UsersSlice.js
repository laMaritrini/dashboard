import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../../service/api-user";

export const fetchUsers = createAsyncThunk("get/fetchUsers", async () => {
  const response = await getUsers();
  return response;
});

export const fetchUser = createAsyncThunk("get/fetchUser", async (id) => {
  const response = await getUser(id);
  return response;
});

export const createNewUser = createAsyncThunk(
  "create/createNewUser",
  async (data) => {
    const response = await createUser(data);
    return response;
  }
);

export const removeUser = createAsyncThunk("delete/removeUser", async (id) => {
  return await deleteUser(id);
});

export const updateUser = createAsyncThunk(
  "update/updateUser",
  async ({ id, data }) => {
    const response = await editUser(id, data);
    return response;
  }
);

const initialState = {
  users: [],
  user: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = [...state.users, action.payload];
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      const newUsers = state.users.filter(
        (item) => item._id !== action.payload
      );
      state.users = [...newUsers];
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.map((item) =>
        item._id === action.payload.id ? action.payload : item
      );
    });
  },
});

export default usersSlice.reducer;

export const selectStateUsers = (state) => state.users.users;
export const selectStateDetail = (state) => state.users.user;
