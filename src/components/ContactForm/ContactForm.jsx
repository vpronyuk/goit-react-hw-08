import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import { addContact } from "../../redux/contacts/operations";

import css from "../ContactForm/ContactForm.module.css";

const contactUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!!")
    .min(3, "Your name is too short!")
    .max(50, "Your name is too long!"),
  number: Yup.string()
    .required("Number is required!")
    .min(3, "Your number is too short!")
    .max(50, "Your number is too long!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={contactUserSchema}
    >
      <Form className={css.form}>
        <label htmlFor="nameInput" className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            placeholder="Enter contact's name"
            className={css.input}
          />
          <ErrorMessage component="p" name="name" className={css.error} />
        </label>
        <label htmlFor="numberInput" className={css.label}>
          <span>Number</span>
          <Field
            type="tel"
            name="number"
            placeholder="Enter contact's number"
            className={css.input}
          />
          <ErrorMessage component="p" name="number" className={css.error} />
        </label>
        <Button
          variant="contained"
          size="small"
          style={{ minWidth: "100px" }}
          color="secondary"
          startIcon={<AddIcCallIcon />}
          type="submit"
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
