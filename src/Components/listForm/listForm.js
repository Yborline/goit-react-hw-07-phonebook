import s from "./listForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { contactsOperations, contactsSelectors } from "redux/contact";
import React from "react";
import { Button } from "@mui/material";

const ListForm = () => {
  const { deleteContacts } = contactsOperations;
  const { findContact } = contactsSelectors;
  const dispatch = useDispatch();
  const onContacts = useSelector(findContact);

  return (
    <div className={s.container}>
      {" "}
      <ul className={s.list}>
        {onContacts.map(({ id, name, number }) => (
          <li className={s.line} key={id}>
            <div className={s.containerLi}>
              <span>{name}: </span>
              <span>{number}</span>
            </div>
            <div>
              <Button
                className={s.button}
                variant="contained"
                size="small"
                color="error"
                type="submit"
                onClick={() => dispatch(deleteContacts(id))}
              >
                delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ListForm.propTypes = {
  onContacts: PropTypes.array,
  deleteContacts: PropTypes.func,
};

export default ListForm;

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   onContacts: findContact(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContacts: (id) => dispatch(contactsOperations.deleteContacts(id)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ListForm);

// { onContacts, onDeleteContacts }
