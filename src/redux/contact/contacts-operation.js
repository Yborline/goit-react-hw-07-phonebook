import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  // addContactsRequest,
  // addContactsSuccess,
  // addContactsError,
  deleteContactsRequest,
  deleteContactsError,
  deleteContactsSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
} from "./contacts-action";

// axios.defaults.baseURL = "https://6235f643163bf7c474604d18.mockapi.io/contacts";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, rejectWithValue) => {
    try {
      const { data } = await axios.get("/contacts");

      return data;
    } catch (error) {
      rejectWithValue(alert(error.message));
    }
  }
);

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch((error) => dispatch(fetchContactsError(error)));
// };

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (text) => {
    const contacts = {
      name: text.name,
      number: text.phone,
      completed: false,
    };
    const { data } = await axios.post("/contacts", contacts);
    return data;
  }
);
// export const addContact = (text) => async (dispatch) => {
//   const contacts = {
//     name: text.name,
//     phone: text.phone,
//     completed: false,
//   };
//   dispatch(addContactsRequest());

//   try {
//     const { data } = await axios.post("/contacts", contacts);
//     dispatch(addContactsSuccess(data));
//   } catch (error) {
//     dispatch(addContactsError(error));
//   }
// };

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    axios.delete(`/contacts/${id}`);
    return id;
  }
);

// export const deleteContacts = (id) => async (dispatch) => {
//   dispatch(deleteContactsRequest());
//   try {
//     const _ = axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactsSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactsError(error));
//   }
// };
