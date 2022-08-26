import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockUsers } from "../../data/mockUsers";

export function delay(data, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const fetchUsers = createAsyncThunk("post/fetchUsers", async () => {
  return await delay(MockUsers, 100);
});

export const fetchUser = createAsyncThunk("get/fetchUser", async (id) => {
  const oneUser = MockUsers.find((item) => item.id === id);
  return await delay(oneUser, 100);
});

export const createNewUser = createAsyncThunk(
  "create/createNewUser",
  async (data) => {
    const newArray = data;
    return await delay((MockUsers, newArray), 100);
  }
);
export const removeUser = createAsyncThunk("delete/removeUser", async (id) => {
  const newUsersArray = MockUsers.filter((item) => item.id !== id);
  return await delay(newUsersArray, 100);
});
export const updateUser = createAsyncThunk(
  "update/updateUser",
  async (id, data) => {
    const newUsersArray = MockUsers.map((item) =>
      item.id === id ? { ...item, data } : item
    );
    return await delay(newUsersArray, 100);
  }
);

const initialState = {
  users: [],
  user: [],
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
      state.users = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;

export const selectStateUsers = (state) => state.users.users;
export const selectStateDetail = (state) => state.users.user;
