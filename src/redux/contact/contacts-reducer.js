import { combineReducers } from "redux";
import { createReducer, createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  fetchContacts,
  deleteContacts,
} from "./contacts-operation";
import { changeFilter } from "./contacts-action";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});

// имерр !!!

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     filter: "",
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         items: action.payload,
//       };
//     },
//     [fetchContacts.pending]: (state) => {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     },
//   },
// });
// [...state.items, ...action.payload]

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
