import { createSelector } from "@reduxjs/toolkit";
const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;
const getLoading = (state) => state.loading;
const getErrors = (state) => state.errors;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
const selectors = {
  getVisibleContacts,
  getFilter,
  getLoading,
  getErrors,
};

export default selectors;
