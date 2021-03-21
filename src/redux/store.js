import { combineReducers } from "redux";
import {
  contactsReducer,
  filterReducer,
  errorsReducer,
  loadingReducer,
} from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});

export const store = configureStore({ reducer: rootReducer });
