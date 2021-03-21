import reduxActionTypes from "../reduxActionTypes";
import { createReducer } from "@reduxjs/toolkit";
const initialContactsState = [];
const initialFilterState = "";
export const contactsReducer = createReducer(initialContactsState, {
  [reduxActionTypes.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [reduxActionTypes.deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [reduxActionTypes.fetchContactsSuccess]: (_, action) => action.payload,
});
export const loadingReducer = createReducer(false, {
  [reduxActionTypes.addContactRequest]: () => true,
  [reduxActionTypes.addContactSuccess]: () => false,
  [reduxActionTypes.addContactError]: () => false,
  [reduxActionTypes.deleteContactRequest]: () => true,
  [reduxActionTypes.deleteContactSuccess]: () => false,
  [reduxActionTypes.deleteContactError]: () => false,
  [reduxActionTypes.fetchContactsRequest]: () => true,
  [reduxActionTypes.fetchContactsSuccess]: () => false,
  [reduxActionTypes.fetchContactsError]: () => false,
});
export const errorsReducer = createReducer(null, {
  [reduxActionTypes.addContactError]: (_, { payload }) => payload,
  [reduxActionTypes.fetchContactsError]: (_, { payload }) => payload,
  [reduxActionTypes.deleteContactError]: (_, { payload }) => payload,
});
export const filterReducer = createReducer(initialFilterState, {
  [reduxActionTypes.filter]: (_, action) => action.payload,
});
