import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts/${id}`,
        { method: 'DELETE' }
      );

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

    const array = stateContacts.filter(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (array.length > 0) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    try {
      const response = await fetch(
        'https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts/',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error");
      }

      const data = await response.json();
      dispatch(addContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.fulfilled]: state => {
      state.error = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.fulfilled]: state => {
      state.error = false;
    },
  },
});

const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
