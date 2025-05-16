import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contactList.contacts.items;
export const selectLoading = state => state.contactList.contacts.loading;
export const selectError = state => state.contactList.contacts.error;
export const selectNameFilter = state => state.filter.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
