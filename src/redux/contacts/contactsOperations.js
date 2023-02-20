import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteContact, addContact } from './contactsSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');

      if (!response.ok) {
        throw new Error('Server Error');
      }

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      if (!response.ok) {
        throw new Error("Can't delete contact. Server Error");
      }
      dispatch(deleteContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue, dispatch, getState }) {
    const stateContacts = getState().contacts.contacts;

    const isCoincidence = stateContacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isCoincidence) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    try {
      const response = await axios.post('/contacts', {
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error");
      }

      dispatch(addContact(response));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
