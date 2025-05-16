import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { deleteContact, addContact, fetchContacts } from './operations';
import { logout } from '../auth/operations';
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};
const slice = createSlice({
  name: 'contactList',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.contacts.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state, action) => {
          state.contacts.error = null;
          state.contacts.loading = true;
        }
      );
  },
});

export const contactsReducer = slice.reducer;
// export const { addContact, deleteContact, fetchContacts } = slice.actions;
