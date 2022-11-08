import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteContact,
  getContact,
  getContacts,
} from "../../service/api-contact";



export const fetchContacts = createAsyncThunk(
  "post/fetchContacts",
  async () => {
    return await getContacts();
  }
);

export const fetchContact = createAsyncThunk("get/fetchContact", async (id) => {
  const response = await getContact(id);
  return response;
});

export const removeContact = createAsyncThunk(
  "delete/removeContact",
  async (id) => {
    return await deleteContact(id);
  }
);

const initialState = {
  contacts: [],
  contact: {},
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
     const newContactsList = state.contacts.filter((item) => item._id !== action.payload);
     state.contacts = [...newContactsList];
    });
  },
});

export default usersSlice.reducer;

export const selectStateContacts = (state) => state.contacts.contacts;
export const selectStateDetail = (state) => state.contacts.contact;
