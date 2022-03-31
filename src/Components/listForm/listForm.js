import s from "./listForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { contactsOperations, contactsSelectors } from "redux/contact";
import { useEffect } from "react";

const ListForm = () => {
  const { findContact } = contactsSelectors;
  const dispatch = useDispatch();
  const onContacts = useSelector(findContact);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {onContacts.map((contact) => (
        <li className={s.line} key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            className={s.button}
            type="submit"
            onClick={() =>
              dispatch(contactsOperations.deleteContacts(contact.id))
            }
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ListForm.propTypes = {
  onContacts: PropTypes.array,
  onDelete: PropTypes.func,
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
