import React from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors } from "redux/contact";
import { changeFilter } from "redux/contact/contacts-action";

export default function Filter() {
  const { getFilter } = contactsSelectors;
  const valueFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.container}>
      filter for name{" "}
      <input
        className={s.inputName}
        type="text"
        value={valueFilter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  valueFilter: PropTypes.string,
  onChange: PropTypes.func,
};
