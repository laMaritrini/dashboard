import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockContacts } from "../../data/mockContacts";
import { getContacts } from "../../service/api-contact";

export function delay(data, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export const fetchContacts = createAsyncThunk(
  "post/fetchContacts",
  async () => {
    return await getContacts();
  }
);

export const fetchContact = createAsyncThunk("get/fetchContact", async (id) => {
  const oneContact = MockContacts.find((item) => item.id === id);
  return await delay(oneContact, 100);
});

export const removeContact = createAsyncThunk(
  "delete/removeContact",
  async (id) => {
    const newUsersArray = MockContacts.filter((item) => item.id !== id);
    return await delay(newUsersArray, 100);
  }
);

const initialState = {
  contacts: [],
  contact: [],
};

const usersSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.contacts = action.payload;
    });
    builder.addCase(fetchContact.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.contact = action.payload;
    });

    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.contacts = action.payload;
    });
  },
});

export default usersSlice.reducer;

export const selectStateContacts = (state) => state.contacts.contacts;
export const selectStateDetail = (state) => state.contacts.contact;
