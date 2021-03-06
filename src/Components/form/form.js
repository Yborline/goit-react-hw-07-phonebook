import { useState } from "react";
import { nanoid } from "nanoid";
import s from "./form.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "../../redux/contact";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const { addContact } = contactsOperations;
  const { getForm } = contactsSelectors;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const nameinputId = nanoid();
  const numberInputId = nanoid();

  const valueForm = useSelector(getForm);
  const dispatch = useDispatch();
  const onSubmit = (text) => dispatch(addContact(text));

  const handleSubmit = (event) => {
    event.preventDefault();

    const state = { name, phone };
    valueForm.some(
      (contact) =>
        contact.phone === phone ||
        contact.name.toLowerCase() === name.toLowerCase()
    )
      ? toast("Такой контакт уже есть")
      : onSubmit(state);
    reset();
  };

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const twohandleChange = (event) => {
    const { value } = event.currentTarget;
    setPhone(value);
  };
  const reset = () => {
    setName("");
    setPhone("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.container}>
        <label className={s.label} htmlFor={nameinputId}>
          Name{" "}
          <input
            className={s.inputName}
            value={name}
            onChange={handleChange}
            id={nameinputId}
            type="text"
            name="setName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label} htmlFor={numberInputId}>
          Number
          <input
            className={s.inputNumber}
            id={numberInputId}
            onChange={twohandleChange}
            value={phone}
            type="tel"
            name="setPhone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <div className={s.buttonContainer}>
        <Button
          className={s.button}
          size="small"
          variant="contained"
          color="success"
          type="submit"
        >
          Save
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </form>
  );
}

Form.propTypes = {
  Form: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   valueForm: state.contacts.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (text) => dispatch(contactsOperations.addContact(text)),
// });

export default Form;
