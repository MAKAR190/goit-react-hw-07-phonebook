import * as actions from "./actions";
import axios from "axios";

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("http://localhost:3000/contacts")
    .then((res) => dispatch(actions.fetchContactsSuccess(res.data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());
  axios
    .post("http://localhost:3000/contacts", contact)
    .then((res) => {
      dispatch(actions.addContactSuccess(res.data));
    })
    .catch((error) => dispatch(actions.addContactError(error)));
};
export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then(() => {
      dispatch(actions.deleteContactSuccess(id));
    })
    .catch((error) => dispatch(actions.deleteContactError(error)));
};
