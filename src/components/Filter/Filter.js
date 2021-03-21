import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/actions";
import contactsSelectors from "../../redux/contactsSelectors";
function Filter({ filterChange, filterValue }) {
  return (
    <div className={styles.wrapper}>
      <label>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={filterChange}
        ></input>
      </label>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    filterValue: contactsSelectors.getFilter(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: (e) => dispatch(filterContacts(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
